export function memoize<T extends (...args: any[]) => any>(func: T): (...args: Parameters<T>) => ReturnType<T> {
    const diccionari: Record<string, ReturnType<T>> = {}

    return (...args: Parameters<T>): ReturnType<T> => {
        const clau: string = args.join("_")

        if (diccionari.hasOwnProperty(clau)) {
            console.log("VALOR MEMOIZED " + clau)
            return diccionari[clau]
        }

        const valor = func(...args)
        diccionari[clau] = valor

        return valor

    }


}