import {SaveFile} from './save-file.use-cases';
import fs from 'fs';

describe('save-file', () => {

    afterAll( () => {
        fs.rmSync('outputs', {recursive: true})
        fs.rmSync('tests', {recursive: true})
    })

    test('should save a file with defaults values', () => {
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = { fileContent: 'content test' }
        
        const createFile = saveFile.execute(options);
        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});
        
        expect( createFile ).toBeTruthy()
        expect( fileExist ).toBeTruthy()
        expect( fileContent ).toBe( options.fileContent )
    });

    test('should save a file with custom values', () => {
        const options = {
            fileContent: 'custom content',
            fileDestination: 'tests',
            fileName: 'file-test'
        }

        const filePath = `${options.fileDestination}/${options.fileName}.txt`;
        const saveFile = new SaveFile();
        const createFile = saveFile.execute(options);

        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});

        expect( createFile ).toBeTruthy();
        expect( fileExist ).toBeTruthy();
        expect( fileContent ).toBe( options.fileContent );
    });

    test('should return false if a directory could not be created', () => {
        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => {throw Error('This a custom error of testing - directory')}
        );

        const result = saveFile.execute({ fileContent: 'algo' });

        expect( result ).toBeFalsy();

        mkdirSpy.mockRestore();
    });

    test('should return false if a file could not be wrote', () => {
        const saveFile = new SaveFile();
        const readFileSyncSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => {throw Error('This a custom error of testing - file')}
        );

        const result = saveFile.execute({ fileContent: 'algo' });

        expect( result ).toBeFalsy();

        readFileSyncSpy.mockRestore()
    });
});