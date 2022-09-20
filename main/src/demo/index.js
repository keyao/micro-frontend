
let it = fn()

function fn() {
    let index = 0;
    return {
        next:function () {
            return index++
        }
    }
}

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
