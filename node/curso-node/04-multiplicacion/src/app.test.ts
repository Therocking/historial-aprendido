import { Server } from './presentation/server-app';

describe('app', () => {

    test('should call Server.run with values', async() => {
        
        const serverRunMock = jest.fn();
        Server.run = serverRunMock;
        process.argv = ['node', 'app-ts', '-b', '10', '-l', '12', '-d', 'tables', '-n', 'table-10', '-s', '-S'];

        await import('./app');

        expect( serverRunMock ).toHaveBeenCalledWith({
            base: 10,
            limit: 12,
            fileDestination: 'tables',
            fileName: 'table-10',
            showTable: true,
            saveTable: true
        });
    });
});