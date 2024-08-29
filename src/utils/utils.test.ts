import { sum } from './utils';

describe('Sum utils', () => {

    const testValue1 = sum(3,2);
    const testValue2 = sum(5,5);

    it('should pass', () => {
        expect(testValue1).toBe(5);
        expect(testValue2).toBe(10);
    })

    it('should not passs', () => {
        expect(testValue1).not.toBe(6);
        expect(testValue2).not.toBe(2);
    })
});