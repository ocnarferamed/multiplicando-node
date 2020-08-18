const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'crea un archivo con la tabla de multiplicar especificada', opts)
    .help() // funcion para obtener un menu de ayuda prefabricado por yargs
    .argv;


module.exports = {
    argv
}