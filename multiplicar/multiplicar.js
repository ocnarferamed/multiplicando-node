const fs = require('fs');
const colors = require('colors');
/******************************************************************************************************* */
let listarTabla = (base, limite = 10) => {
    console.log('=========================='.green);
    console.log(`====TABLA DEL ${base}==========`.green);
    console.log('=========================='.green);

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('base o limite no valido');
            return;
        }

        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }

        resolve(data);
    })
}


/**************************************************************************************** */
let crearArchivo = (base, limite = 10) => {
        return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject(`el valor introducido como base: '${base}' no es un numero`);
                return;
            }
            let data = "";

            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${ base * i}\n`;
            }

            fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    resolve(`tabla-${base}-al-${limite}.txt`)
            });
        })
    }
    //FORMA DE EXPORTAR COLOCANDO EN EL ATRIBUTO EXPORTS DEL OBJETO GLOBAL MODULE OTRO OBJETO CON LAS PROPIEDADES A EXPORTAR, EN ESTE CASO LA FUNCION crearArchivo

module.exports = {
    crearArchivo,
    listarTabla
}

//OTRA MANERA SERIA DEFINIR LA FUNCION DIRECTAMENTE ASI:
/**
 * module.exports.nombreDeLaFuncion = ()=>{.....}
 */