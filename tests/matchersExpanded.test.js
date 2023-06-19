const multiplicar = require('../project/myFunctions');

test('there is a poll in Liverpool', () => {
    expect('Liverpool').toMatch(/pool/)
});

test('multiplicar 4*3 es más grande que 10', () => {
    expect(multiplicar(4, 3)).toBe(12);
    expect(multiplicar(4, 3)).toBeGreaterThan(10);
    expect(multiplicar(4, 3)).toBeLessThan(20);
    expect(multiplicar(4, 3)).toBeLessThanOrEqual(12);
})

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

const carStock = [
    'BMW',
    'Mercedes',
    'Ferrari',
    'Toyota'
];

test('that the car stock list has a Ferrari', () => {
    expect(carStock).toContain('Ferrari');
});