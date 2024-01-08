import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs( hideBin(process.argv) )
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .option('S', {
        alias: 'save',
        type: 'boolean',
        default: false,
        describe: 'Save multiplication table in a file'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table',
        describe: 'File name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })
    .check(( argv ) => {
        if( argv.b < 1 ) throw 'ERROR: Base must be graten than 0'
        if( argv.l < 1 ) throw 'ERROR: limit must be graten than 0'

        return true
    })
    .parseSync()