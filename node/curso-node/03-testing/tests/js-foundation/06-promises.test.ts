import {getPokemonById} from '../../src/js-foundation/06-promises';

describe('06-promises', () => {

    test('should returns a pokemon name', async() => {
        
        const pokemonID = 1;
        const pokemonName = await getPokemonById(pokemonID);

        expect( pokemonName ).toBe('bulbasaur')
    });

    test('should returns an error', async() => {

        try {
            
            const pokemonID = 45000000;
            await getPokemonById(pokemonID);
            expect(true).toBeFalsy()

        } catch (error) {
            expect( error ).toMatch(/not found/)
        }
        
    });

});