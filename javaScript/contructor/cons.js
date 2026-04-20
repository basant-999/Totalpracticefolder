// function fact(name,age){
//     this.name = name 
//     this .age = age
// }

// const output = new fact("basant",25)
// console.log(output)
// console.log(output.age)

function con( name,sub){
     this.name = name 
     this.sub = sub
}

const out = new con("rahul","hindi")
console.log(out.sub)


// ============================default value
// function deft(){
//     this.city = "bareli"
//     this.email = "bk@"

// }

// const result = new deft()
//  console.log(result.city)

function douc(){
     this.city = "bhopal"
     this.emai = "rhahcu@"
}

  const res =  new douc()
  console.log(res.emai)
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