import { memoize } from "./memoize";

function multiplicacio(...nombres: number[]): number {
    //nombres.sort((a, b) => a - b)
    console.log(nombres)

    /* // Implementació funció amb bucle for of
    let total: number = 1
    for (const nombre of nombres) {
        total *= nombre
    }
    return total
    */

    // implementació de funció amb el metode reduce
    return nombres.reduce((acc: number, item: number) => acc * item, 1)
}

export const multiplicacioMemoizada = memoize(multiplicacio)
