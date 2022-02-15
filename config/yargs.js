const argv = require('yargs')
.option( 'b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'base de la tabla de multiplicar'
}).option( 'l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'muesta la tabla en la consola'
    
}).option( 'h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'limite de la tabla de multiplicar'
    
})

.check( (argv, opts) =>{
    if (isNaN(argv.b)) {
        throw 'la base tiene que ser un numero'
    }
    return true;
})
.argv;

module.exports = argv;