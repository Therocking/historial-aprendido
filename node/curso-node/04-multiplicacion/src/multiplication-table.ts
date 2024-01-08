import fs from 'fs';

// archivo de demostración

export const multiplicationTable = 
(base: number, limit: number, showTable: boolean, saveTable: boolean) => {
    
    let output = '';
    const header = `
    =======================
        Tabla del ${base}
    =======================\n
    `;

    for (let arg = 1; arg <= limit; arg++) {
        output += `${base} x ${arg} = ${base * arg}\n`;
    }

    output = header + output;
    
    if( showTable ) console.log(output);
    
    if (saveTable) {
        
        const directoryPath = 'outputs';
        fs.mkdirSync(directoryPath, {recursive: true});
        fs.writeFileSync(`${directoryPath}/tabla-${base}.txt`, output);
        console.log('file created');
    }
}