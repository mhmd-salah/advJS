let use = {
  name:"mohamed",
  age: 21,

  disableFullName(){
    return this.name + this.age
  }
}
console.log(use.disableFullName());