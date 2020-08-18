const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}



//console.log(process.argv); ESTE ES EL OBJETO PROCESS Y SU ATRIBUTO ARGV QUE CONTIENE PARAMETROS PASADOS
// ACA LO UTILIZAMOS PARA ENVIAR UN PARAMETRO DE BASE PARA REALIZAR MULTIPLICACIONES
//el problema de la captura del parametro para la base de la multiplicacion es que solo podemos pasarlo como primer parametro
//cualquier cosa pasada como primer parametro sera tomada como la base
/*
let argv2 = process.argv;

console.log('limite : ', argv.limite);
console.log('...................');
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1];

*/

// ACA UTILZAMOS LA FUNCION OBTENIDA MEDIANTE DESESCTRUCTURACION DE OBJETO DEL ARRCHIVO MULTIPLICAR.JS
//LA FUNCION RETORNA UNA PROMESA, POR ESO TRABAJAMOS CON THEN Y CATCH.
/*
crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(e => console.log(e));

    */