import {buildMakePerson} from '../../src/js-foundation/05-factory';

describe('05-factory', () => {

    const getUUID = () => '123456'
    const getAge = () => 18
    
    test('makePerson should macth to snapshot', () => {
        const makePerson = buildMakePerson({ getUUID, getAge });

        expect(makePerson).toMatchSnapshot()

    })

    test('buildMakePerson should be a fn', () => {

        const makePerson = buildMakePerson({ getUUID, getAge });

        expect( typeof makePerson ).toBe('function')
    })

    test('should returns a person obj', () => {

        const obj = {
            name: 'jose',
            birthdate: '2005-7-24'
        }

        const makePerson = buildMakePerson({ getUUID, getAge });
        const person = makePerson(obj);

        expect( person ).toEqual({
            id: '123456',
            name: 'jose',
            birthdate: '2005-7-24',
            age: 18
        });
    });
});