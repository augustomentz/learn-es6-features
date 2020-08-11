let front = ['react', 'vue', 'angular']
let back = ['python', 'ruby', 'nodejs']

// let fullstack = []
// fullstack = fullstack.concat(front)
// fullstack.push('RxJS')
// fullstack = fullstack.concat(back)

let fullstack = [...front, 'RxJS', ...back]

console.log([...'augusto'])
console.log(...front)
console.log(fullstack)