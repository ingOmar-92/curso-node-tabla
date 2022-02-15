const fs = require('fs');
const colors = require('colors');


const crearArchivo =  async ( base , listar = false, hasta = 10) => {


    try {
       



        let salida = '';
        let consola = '';

        for (let index = 1; index <= hasta ; index++) {
            const result =  base * index ;
            consola += ` ${ colors.blue(base) }  ${ 'x'.green } ${ index.toString().rainbow } ${'='.green } ${ result }\n`;
            salida += ` ${ base } x ${ index } = ${ result }\n`;

        }
        if (listar) {
            
            console.log('=================='.rainbow);
            console.log(' TABLA DEL '.green, colors.green(base));
            console.log('=================='.rainbow);
            console.log(consola);
            
        }
            

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`;
        
    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}