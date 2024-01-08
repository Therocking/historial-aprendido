import { CreateTable } from "../domain/use-cases/craete-table.use-cases";
import { SaveFile } from "../domain/use-cases/save-file.use-cases";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    saveTable: boolean;
    fileName: string;
    fileDestination: string;
}


export class Server {

    static run({ 
        base, limit, showTable, saveTable, fileName, fileDestination 
    }: RunOptions) {

        console.log('Server Running...\n');
        
        const table = new CreateTable().execute({ base, limit });
        
        if( saveTable ) {
            const saveFile = new SaveFile().execute({ fileContent: table, fileName, fileDestination });

            (saveFile) 
                ? console.log('File Created')
                : console.error('File no Created')
        }

        if( showTable ) console.log(table);

    }
}