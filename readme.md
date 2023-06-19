
1. Verificar que esté node JS y npm instalado
```
node -v
npm -v
```


2. Ejecutar el comando
`npm init`

3. Ejecutar el comando
`npm install --save-dev jest`

4. Una vez desarrollado el código
`npm run test`

5. Para correr un archivo específico
`npm run test  tests/myFunctions.test.js`

6. Para correr un test específico, agregar el .only en el nombre del test
`test.only('Ejem...`

.toBe(6)  //para igualdades de números
.toEqual({first: 1; second: 2})
.not.toBe


http://jestjs.io/docs/en/expect