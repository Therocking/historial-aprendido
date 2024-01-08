# Condicionales

### if-else
Igual que el **for** no se usan los pararentesis:

```go
if d < condition {}
```

El if es parecido al bucle **for** en que puede empezar con una declaración corta antes de la condición:

```go
if d := body; d < condition {}
```

Con el bloque **else**:

```go
if d < condition {
}else{}
```

### swicth
En el **swicth** el **break** no es necesario agreagarlo, ya que **go** lo hace automaticamente

```go
func main() {
	fmt.Print("Go runs on ")
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.\n", os)
	}
}
```

En el bloque **switch** se pueden hacer la evaluaciones dentro de los **cases**:

```go
switch {
	case t.Hour() < 12:
		fmt.Println("Good morning!")
	case t.Hour() < 17:
		fmt.Println("Good afternoon.")
	default:
		fmt.Println("Good evening.")
}
```
