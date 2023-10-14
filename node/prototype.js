var Product= function(name,price,veg,){
    this.name=name;
    this.price=price;
    this.veg=veg;
}
Product.prototype.sayHello= function(){
    console.log(`Hello Everyone....! My name is ${this.name}`);
}
Product.prototype.display= function(){
    console.log(`Name: ${this.name}`);
    console.log(`price: ${this.price}`);
    console.log(`veg: ${this.veg}`);
}

Product.prototype.getPrice=function(){
    console.log(`My Price is: ${this.price}`);
}
let product1= newproduct("PARLEG","3300K","YES",);
console.log(Product1);
product1.sayHello();
product1.display();