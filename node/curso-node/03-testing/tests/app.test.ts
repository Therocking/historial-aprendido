
// AAA

describe('app', () => {
    
    test('should be 30', () => {
        
        //Arrange
        const num = 19;
        const num2 = 11;

        // Act
        const result = num + num2;

        //Assert
        expect( result ).toBe( 30 );
    });
});