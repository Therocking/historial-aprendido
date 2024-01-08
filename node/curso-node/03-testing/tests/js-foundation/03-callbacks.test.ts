import { getUserById } from '../../src/js-foundation/03-callbacks';


describe('02-destructuring', () => {

    test('should be an error', () => {
        
        const id = 4;

        getUserById( id, (err, user) =>{

            expect( err ).toMatch(/not found/)
            expect( user ).toBeUndefined()
        });
    });

    test('should be a jane doe', (done) => {
        
        const id = 2;

        getUserById( id, (err, user) =>{

            expect( user ).toEqual({
                id: 2,
                name: 'Jane Doe',
            });

            expect( err ).toBeUndefined();

            done(); // done if the callback es async
        });
    });

});