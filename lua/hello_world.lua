print("Hola mundo")

-- Variables
local num = 1
local string = "string"
local bool = true
local a = nil

-- Estructuras de flujo
local age = 10

-- if-else-elseif
if age < 18 then
	print("Es menor")
end

if age > 18 then
	print("over 18")
elseif age == 18 then
	print("18 huh")
else
	print("kiddo")
end

-- Operadores logicos
if age < 18 and age > 10 then
	print("Entre 18 y 10")
elseif age > 18 or age == 18 then
	print("Tiene 18")
end

-- Invertir valores
if not true then
	print("No es verdadero")
end

-- Funciones
local fn = function()
	print("Funcion")
end
print(fn())

local function sumar(a, b)
	return a + b
end
print(sumar(7, 1))

-- Bucles

-- for
for i = 0, 10, 1 do
	print(i)
end

-- while
while true do
	print("while loop")
end

-- Array
local colorsArr = { "red", "green", "blue" }
print(colorsArr[1])

-- Dictionaries
local info = {
	name = "jose",
	age = 18,
	isAlive = true,
}
print(info["name"])
print(info.name)

-- Importaciones
require("path")
