class Test{
  constructor(name,age){
    this.name =name;
    this.age = age;
    console.log("Test is instance")

  }

  getName(){
    return this.name 
  }
}

export default new Test();


