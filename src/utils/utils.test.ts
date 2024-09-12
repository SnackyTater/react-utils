import { cn } from "./string";

test('cn must connect string properly', () => {
    const test1 = cn('a', 'b', 'c');
    const test2 = cn('a', '', 'c');
    const test3 = cn('', 'b', '', 'd');

    expect(test1).toBe('a b c');
    expect(test2).toBe('a c');
    expect(test3).toBe('b d');
})