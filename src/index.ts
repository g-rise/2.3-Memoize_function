import { multiplicacioMemoizada } from "./multiplicacio";


const mul1 = multiplicacioMemoizada(1, 2, 3)
console.log(mul1)

const mul2 = multiplicacioMemoizada(1, 2, 3)
console.log(mul2)

const mul3 = multiplicacioMemoizada(13, 27, 3, 75)
console.log(mul3)

const mul4 = multiplicacioMemoizada(13, 3, 75, 27)
console.log(mul4)

const mul5 = multiplicacioMemoizada(13, 3, 75, 27)
console.log(mul5)