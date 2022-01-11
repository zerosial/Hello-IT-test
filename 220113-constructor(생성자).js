function Person(){
    this.name = 'kim';
    this.first = 10;
    this.second = 20;
    this.third = 30;
    this.sum = function(){ 
        return this.first+this.second+this.third;
    }
}

console.log('Person()', Person());  // undefined
console.log('new Person()', new Person()); // 객체 생성

var kim = new Person();
var lee = new Person();
console.log("kim.sum()",kim.sum());
console.log("lee.sum()",lee.sum());
