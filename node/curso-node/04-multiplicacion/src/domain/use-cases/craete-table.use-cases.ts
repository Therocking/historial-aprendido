
export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor() {}

    execute ({ base, limit = 10 }: CreateTableOptions)  {
        const headerTable = `
        =======================
            Tabla del ${base}
        =======================\n
        `;

        let output = '';
        for (let i = 1; i <= limit; i++) {
            output += `${base} x ${i} = ${base * i}\n`;
        }

        return headerTable + output ;
    };
}