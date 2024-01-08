import { emailTemplate } from '../../src/js-foundation/01-template';

describe('01-tamplate', () => {

    test('emailTemplate should contain {{name}} and {{orderId}}', () => {
        
        expect( emailTemplate ).toContain('{{name}}')
        expect( emailTemplate ).toMatch( /{{orderId}}/ ) // with regex
    })
})