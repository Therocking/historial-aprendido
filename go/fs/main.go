package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
	"runtime"
)

type Msg struct {
	Cpu      int    `json:"cpu"`
	Hostname string `json:"hostname"`
	Arch     string `json:"arch"`
}

func main() {
	if len(os.Args) < 2 {
		log.Fatal("Must espicify the file name in the args.")
		return
	}

	fileName := os.Args[1]

	if os.Args[2] == "show" {
		if err := ShowContent(fileName); err != nil {
			log.Fatal(err)
		}
		return
	}

	if os.Args[2] == "delete" {
		if err := DeleteFile(fileName); err != nil {
			log.Fatal(err)
		}
		return
	}

	if os.Args[2] == "add" {
		hostname, _ := os.Hostname()
		msg := Msg{
			Cpu:      runtime.NumCPU(),
			Hostname: hostname,
			Arch:     runtime.GOARCH,
		}

		if err := OpenFile(fileName, msg); err != nil {
			log.Fatal(err)
		}
		return
	}

	if err := CreateFile(fileName); err != nil {
		log.Fatal(err)
	}
}

func CreateFile(fileName string) error {
	file, err := os.Create(fileName)
	if err != nil {
		return fmt.Errorf("no se pudo crear el archivo %s: %v", fileName, err)
	}
	defer file.Close()

	return nil
}

func OpenFile(fileName string, msg Msg) error {
	// Abre el archivo para escribir sobre el mismo
	file, err := os.OpenFile(fileName, os.O_APPEND|os.O_WRONLY, 0644)
	if err != nil {
		return fmt.Errorf("no se pudo crear el archivo %s: %v", fileName, err)
	}
	defer file.Close()

	err = writeFile(file, fileName, msg)
	if err != nil {
		return fmt.Errorf("no se pudo crear el archivo %s: %v", fileName, err)
	}

	return nil
}

func writeFile(file io.Writer, fileName string, msg Msg) error {
	// Inserta data en el archivo con el formato JSON
	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "\t")

	err := encoder.Encode(msg)
	if err != nil {
		return fmt.Errorf("no se pudo crear el archivo %s: %v", fileName, err)
	}

	return nil
}

func ShowContent(fileName string) error {
	content, err := os.ReadFile(fileName)
	if err != nil {
		return fmt.Errorf("no se pudo leer el archivo %s: %v", fileName, err)
	}

	fmt.Print(string(content))
	return nil
}

func DeleteFile(fileName string) error {
	err := os.Remove(fileName)
	if err != nil {
		return fmt.Errorf("no se pudo borrar el archivo %s: %v", fileName, err)
	}

	return nil
}
