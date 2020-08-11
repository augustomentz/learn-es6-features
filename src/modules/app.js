import { union, uniq } from 'rambda'
import sum, { sub, multiply, div as divide } from './utils'

import react from 'react'
import reactDOM from 'react-dom'

const a = [1, 2, 3]
const b = [1, 2, 3, 4]
const c = union(a, b)
const d = uniq(a, b)
const e = sum(1, 3)
const f = sub(1, 3)
const g = multiply(1, 3)
const h = divide(1, 3)

console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)