
class People2 {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    getName() {
        return this.name
    }
    setName (str) {
        this.name = str
    }
}
export default new People2('K2','22')