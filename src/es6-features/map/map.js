const m = new Map()

m.set('Augusto', 21)
m.set('Bruno', 21)
m.set('Tiago', 35)

console.log(m.size)

m.delete('Tiago')

console.log(m.has('Augusto'))

const it = m.values()

console.log(it)
console.log(m)
