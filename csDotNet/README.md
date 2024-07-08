# C# y .NET

## User sercrets
Para manejar los secretos del usuario de c# se pueden utilizar comandos de terminal:
 - Para crear el id de los secrets, se utiliza: `dotnet user-secrets init`.
 - Para agregar un secreto: `dotnet user-secrets set "NombreDelSecreto" "ValorDelSecreto"`.
 - Para verlos y listarlos: `dotnet user-secrets list`.

Estos son los que tienen el uso mas común(para mi), para ver los demás ejecuatar: `dotnet user-secrets --help`.
