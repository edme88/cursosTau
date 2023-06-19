const multiplicar = require('../project/myFunctions');

describe('test de multiplicar positivos', () => {
    test('multiplicar 3*2 deberia ser igual a 6', () => {
        expect(multiplicar(3, 2)).toBe(6);
    })

    test('Ejemplo con Objeto', () => {
        const data = { first: 1 };
        data['second'] = 2;
        expect(data).toEqual({ first: 1, second: 2 });
    });

    test('multiplicar 4*3 NO deberia ser igual a 11', () => {
        expect(multiplicar(4, 3)).not.toBe(11);
    })
});