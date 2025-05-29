function fact(name,age){
    this.name = name 
    this .age = age
}

const output = new fact("basant",25)
console.log(output)
console.log(output.age)

// ============================default value
function deft(){
    this.city = "bareli"
    this.email = "bk@"

}

const result = new deft()
 console.log(result.city)

 //=================================class version

 class kisan{
    constructor(state,address){
        this.address = address
        this.state = state
    }

    info(){
        console.log(`${this.state},${this.address}`)
    }
 }

 const ans = new kisan("raisen","power houde") 
 ans.info()