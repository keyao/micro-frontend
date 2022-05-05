console.log(this)
const fn = () => {
    console.log(this)
}
const obj = {
    a:'1',
    fn:function (){
        console.log(this)
        obj.b.fn()
    },
    b:{
        c:'2',
        fn:function (){
            console.log(this)
            console.log(this.h())
        },
        h:() => {
            console.log(this)
        }
    },
    d:this
}

obj.fn()
