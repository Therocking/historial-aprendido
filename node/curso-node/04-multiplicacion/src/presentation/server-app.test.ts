import {Server} from './server-app';
import { CreateTable } from "../domain/use-cases/craete-table.use-cases";
import { SaveFile } from "../domain/use-cases/save-file.use-cases";

describe('server-app', () => {

    afterEach( () => {
        jest.clearAllMocks()
    })

    const options = {
        base: 147,
        limit: 5,
        showTable: false,
        saveTable: false,
        fileName: 'file-name',
        fileDestination: 'tables'
    }

    // test('should run Server with options', () => {
    //     const logs = jest.spyOn(console, 'log');
    //     const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute' );
    //     const saveFileSpy = jest.spyOn( SaveFile.prototype, 'execute' );

    //     Server.run(options);

    //     expect( logs ).toHaveBeenCalledWith('Server Running...\n');

    //     expect( createTableSpy ).toHaveBeenCalledTimes(1);
    //     expect( createTableSpy ).toHaveBeenCalledWith({ base: options.base, limit: options.limit });

    //     expect( saveFileSpy ).not.toHaveBeenCalled();
    // });

    test('should save a file if saveTable is true', () => {
        const logMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveMock = jest.fn().mockReturnValue(true);

        console.log = logMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveMock;

        options.saveTable = true;
        Server.run(options);

        expect( logMock ).toHaveBeenCalledWith('Server Running...\n')
        expect(createMock).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
        expect(saveMock).toHaveBeenCalledWith({ 
            fileContent: '1 x 2 = 2',
            fileName: options.fileName,
            fileDestination: options.fileDestination
        });
        expect( logMock ).toHaveBeenCalledWith('File Created')
    });

    test('should show the table if showTable is true', () => {
        const logMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveMock = jest.fn();

        console.log = logMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveMock;

        options.showTable = true;
        options.saveTable = false;
        Server.run(options);

        expect(createMock).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
        expect(saveMock).toHaveBeenCalledTimes(0)
        expect( logMock ).toHaveBeenCalledWith('1 x 2 = 2')
    });
});