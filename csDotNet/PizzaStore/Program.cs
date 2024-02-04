using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using PizzaStore.Models;

readonly string MyAllowSpecificOrigins = "_MyAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
// Coneccion a db
var connectionString = builder.Configuration.GetConnectionString("Pizzas") ?? "Data Source=Pizzas.db";
// Middlewares
// CORS
builder.Services.AddCors(options => 
{
  options.AddPolicy(name: MyAllowSpecificOrigins,
      builder => 
      {
        builder.WithOrigins("*");
      });
});

builder.Services.AddEndpointsApiExplorer();
// Midd para la connection de la db en memoria
// builder.Services.AddDbContext<PizzaDb>(options => options.UseInMemoryDatabase("items"));
builder.Services.AddSqlite<PizzaDb>(connectionString); // Midd para la coneccion a la db
// Midd para la coneccion de swagger
builder.Services.AddSwaggerGen(c => 
{
  c.SwaggerDoc("v1", new OpenApiInfo { 
      Title = "PizzaStore API", 
      Description = "Making the pizzas you love", 
      Version = "v1" 
  });
});

// Application
var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);

// Rutas
app.UseSwagger();
app.UseSwaggerUI(c =>
   {
     c.SwaggerEndpoint("/swagger/v1/swagger.json", "PizzaStore API V1");
   });

/*Usando una base de datos*/
app.MapGet("/pizzas", async(PizzaDb db) => await db.Pizzas.ToListAsync());
app.MapGet("/pizzas/{id}", async(PizzaDb db, int id) => await db.Pizzas.FindAsync(id));

app.MapPost("/pizzas", async(PizzaDb db, Pizza pizza) => {
    await db.AddAsync(pizza);
    await db.SaveChangesAsync();
    return Results.Created($"/pizzas/{pizza.Id}", pizza);
});

app.MapPut("/pizzas/{id}", async(PizzaDb db, Pizza updatePizza, int id) => {
    var pizza = await db.Pizzas.FindAsync(id);
    if(pizza is null) return Results.NotFound();
    pizza.Name = updatePizza.Name;
    pizza.Desc = updatePizza.Desc;
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.MapDelete("/pizza/{id}", async(PizzaDb db, int id) => {
    var pizza = await db.Pizzas.FindAsync(id);
    if(pizza is null) return Results.NotFound();
    db.Pizzas.Remove(pizza);
    await db.SaveChangesAsync();
    return Results.Ok();
});

/*
 * Usando el modelo en db.cs
app.MapGet("/pizzas/{id}", (int id) => Pizza.GetPizza(id));
app.MapPost("/pizzas", (Pizza pizza) => PizzaStore.DB.PizzaDB.CreatePizza(pizza));
app.MapPut("/pizzas", (Pizza pizza) => PizzaStore.DB.PizzaDB.UpdatePizza(pizza));
app.MapDelete("/pizzas/{id}", (int id) => PizzaDB.RemovePizza(id));
*/

app.Run();
