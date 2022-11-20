import * as sm from '@shumai/shumai'

const size = 4
const iters = 10000

let sum = 0
for (let i = 0; i < 1000; ++i) {
  let c = sm.eye(size)
  c = sm.matmul(c, c)
  sum += c.sum().toFloat32()
}

const t0 = performance.now()
for (let i = 0; i < iters; ++i) {
  let c = sm.eye(size)
  c = sm.matmul(c, c)
  sum += c.sum().toFloat32()
}
const t1 = performance.now()
console.log(`${1e3 * iters / (t1-t0)} iters/sec (result: ${sum})`)
