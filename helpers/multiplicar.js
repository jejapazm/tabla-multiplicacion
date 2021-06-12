
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';

        for(let i = 1; i<=hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }
        
        if(listar){
            console.log('====================='.cyan);
            console.log(`    Tabla del ${base}`);
            console.log('====================='.cyan);
            console.log(consola);
        }
        
        fs.writeFileSync(`./output/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

const crearArchivo2 = (base = 5) => {

    return new Promise( (resolve, reject) => {
        
        let salida = `====================
    Tabla del ${base}
====================\n`;

        for(let i = 1; i<=10; i++) {
            salida = salida + `${ base } x ${ i } = ${ base * i }\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${ base }.txt`, salida);

        resolve(`tabla-${ base }.txt`);
        
    });

}


module.exports = {
    crearArchivo,
    crearArchivo2
};