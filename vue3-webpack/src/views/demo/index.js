
class People {
    name = ''
    #sex = ''
    static age = ''
    constructor(name,age) {

    }
    set name(value){
        this.name = value
        console.log('value')
    }
    getName() {
        return this.name
    }


    setName (str) {
        this.name = str
    }
}
const man = new People('keyao','19')
console.log(man)
console.log(man)

export default People


