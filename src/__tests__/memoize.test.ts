import { memoize } from "../memoize";

describe('memoize', () => {

    it('hauria de tornar un valor numerico memoizado si es crida dues vegades', () => {
        const funcProva = jest.fn((x: number, y: number) => x * y)
        const funcMemoized = memoize(funcProva)

        expect(funcMemoized(7, 4)).toBe(28)
        expect(funcProva).toHaveBeenCalledTimes(1)

        expect(funcMemoized(7, 4)).toBe(28)
        expect(funcProva).toHaveBeenCalledTimes(1)

    })

    it('hauria de tornar un valor de string memoizado si es crida dues vegades', () => {
        const funcProva = jest.fn((x: string, y: string) => `${x} + ${y}`)
        const funcMemoized = memoize(funcProva)

        expect(funcMemoized("Ciccio", "Bello")).toBe("Ciccio + Bello")
        expect(funcProva).toHaveBeenCalledTimes(1)

        expect(funcMemoized("Ciccio", "Bello")).toBe("Ciccio + Bello")
        expect(funcProva).toHaveBeenCalledTimes(1)

        expect(funcMemoized("Pupi", "Avati")).toBe("Pupi + Avati")
        expect(funcProva).toHaveBeenCalledTimes(2)

    })

    it('hauria de funcionar passant-li un array com parametre', () => {
        const funcProva = jest.fn((...arr: number[]) => arr.reduce((acc, item) => acc * item, 1))
        const funcMemoized = memoize(funcProva)

        expect(funcMemoized(1, 2, 3, 4)).toBe(24)
        expect(funcProva).toHaveBeenCalledTimes(1)

        expect(funcMemoized(1, 2, 3, 4)).toBe(24)
        expect(funcProva).toHaveBeenCalledTimes(1)

        expect(funcMemoized(2, 3, 4, 5)).toBe(120)
        expect(funcProva).toHaveBeenCalledTimes(2)


    })

    /*

    it('hauria de tornar un valor memoizado si es crida dues vegades', () => {
        const func = jest.fn()
        const funcProva = memoize(func)

        funcProva()
        funcProva()

    })
*/

})