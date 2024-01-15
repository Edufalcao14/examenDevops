// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return false if the gamertag length is >= 8', () => {
        const result = isValid('gamerta');
        expect(result).toBeFalsy();
    });
});

describe('validations tests suites - isValid', () => {
    test('should return false if the gamertag length is >= 8', () => {
        const result = isValid('gamerta007');
        expect(result).toBeTruthy();
    });
});