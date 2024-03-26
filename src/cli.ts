import * as readline from "node:readline";
import { multiplicacioMemoizada } from "./multiplicacio";

import colors from "colors"



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// Amb aquesta funció, en el cas que no es vulcui sortir o s'hagi teclejat un valor no numeric, recollim els nombres a multiplicar
function recollirNombres(valor: string, nombres: number[] = []) {

    let valorNumeric: number = parseInt(valor)

    if (!valorNumeric && (valor.toLowerCase() == "o" || valor.toLowerCase() == "out")) {
        rl.close()
    } else if (!valorNumeric) {
        console.log(colors.blue.bold.bgWhite(` Vols sortir de l'aplicació? (Si) (No) `))
        rl.once('line', (out) => {
            sortidaApp(out)
        })
    } else {
        rl.question('Introdueix un nombre: ', (numero) => {

            const num = parseInt(numero)

            if (valorNumeric === 1) {
                nombres.push(num)
                const mM = multiplicacioMemoizada(...nombres)
                console.log(mM)

                return reIniciarCli()


            }

            nombres.push(num)
            recollirNombres((valorNumeric - 1).toString(), nombres)

        })

    }




}

// Funció que maneja els errors 
function sortidaApp(x: string) {
    x = x.toLowerCase()


    if (x == "si" || x == "s") {
        console.log(colors.blue.bold(`\nGràcies per haver utilitzat l'aplicació\n`))
        rl.close()
    } else if (x == "no" || x == "n") {
        reIniciarCli()
    } else {
        console.log(`Vols sortir de l'aplicació? (Si) (No)`)
        rl.on('line', (out) => {
            sortidaApp(out)
        })
    }

}



function iniciarCli() {
    console.log(colors.blue.bgWhite('            =========================            '))
    console.log(colors.blue.bold.bgWhite('            Exemple de funció Memoize            '))
    console.log(colors.blue.bgWhite('            =========================            \n'))
    console.log(colors.black.bold.bgBlue('      -----  MULTIPLICADORA MEMOIZED  -----      '))
    console.log(colors.black.bgCyan('  Per sortir de l\'app en qualsevol moment "Out"  \n'))

    rl.setPrompt(colors.cyan("Indica el total de nombres que vols multiplicar --> "))
    rl.prompt()
    rl.once('line', (input) => {
        // console.log(`Has decidit multiplicar ${input} nombres`)
        recollirNombres(input)
    })

}

function reIniciarCli() {
    rl.setPrompt(colors.cyan("\nIndica el total de nombres que vols multiplicar --> "))
    rl.prompt()
    rl.once('line', (input) => {
        // console.log(`Has decidit multiplicar ${input} nombres`)
        recollirNombres(input)
    })

}


iniciarCli()