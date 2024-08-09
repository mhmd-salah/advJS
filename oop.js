function Car(name,color){
   this.name = name;
   this.color= color
   this.start = ()=>console.log("start engin")
}
const bmw = new Car("bmw", "red")
console.log(bmw)
bmw.start()