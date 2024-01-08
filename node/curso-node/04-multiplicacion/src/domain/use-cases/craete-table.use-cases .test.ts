import {CreateTable} from './craete-table.use-cases';

describe('create-table', () => {

    test('should create a table with default values', () => {
        const createTable = new CreateTable();

        const table = createTable.execute({base: 5});
        const rows = table.split('\n').length;

        expect( createTable ).toBeInstanceOf(CreateTable);
        expect( table ).toContain('5 x 1 = 5')
        expect( table ).toContain('5 x 10 = 50')
        expect( rows ).toBe(16)
    })

    test('should create a table with custom values', () => {
        const options = {
            base: 3,
            limit: 20
        }

        const createTable = new CreateTable();

        const table = createTable.execute(options);
        const rows = table.split('\n').length;

        expect( table ).toMatch(/tabla del 3/i)
        expect( table ).toContain('3 x 3 = 9')
        expect( table ).toContain('3 x 11 = 33')
        expect( rows ).toBe(26)
    })
})