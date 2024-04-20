# CMD
Para que se ejecute dentro de un contendor: docker run --rm -v $(pwd):/go/src/app -w /go/src/app golang:1.22.2-alpine3.19 go run .

## Run the app
To run the app you need to go through the file name by args:
```bash
go run . {fileName}
```
That create the file too.

- Delete file
```zsh
go run . {fileName} delete
```

- Add content
```zsh
go run . {fileName} add
```

- Show content
You can use the arg `show` after the file name to show the content on this file:
```zsh
go run . {fileName} show
```