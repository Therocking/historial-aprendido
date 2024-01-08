

const runComands = async(args: string[]) => {
    process.argv = [ ...process.argv, ...args ];

    const {yarg} = await import('./args.plugin');

    return yarg
}

describe('args.plugin.ts', () => {

    const originalArgv = process.argv;
    beforeEach( ()=> {
        process.argv = originalArgv;
        
        jest.resetModules();
    } )
    
    test('should return default values', async() => {

        const args = await runComands(['-b', '10']);

        expect( args ).toEqual( expect.objectContaining({
                b: 10,
                l: 10,
                S: false,
                s: false,
                d: 'outputs',
                n: 'table'
            }));
        });
        
    test('should return configuration with custom values', async() => {
        
        const args = await runComands(['-b', '10', '-l', '12', '-d', 'tables', '-n', 'table-10', '-s', '-S']);

        console.log(args);
        expect( args ).toEqual( expect.objectContaining({
            b: 10,
            l: 12,
            S: true,
            s: true,
            d: 'tables',
            n: 'table-10'
        }));
    });
});