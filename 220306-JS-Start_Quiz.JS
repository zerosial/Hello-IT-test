// 예시 문제 1

function add (x) {
  return function(y) {
    return function(z){
     return x + y + z;
    }
  }
};

/* 카레 함수로 요약시
const add = a => b => c =>
a + b + c
*/



const six = add(1)(2)(3);
const ten = add(2)(3)(5);

console.log(six); // 6
console.log(ten); // 10




// 예시 문제 2
// Object 관련 메소드 사용 금지


function inverse (collection) {
  var result = {};
  for(let i in collection) {
  result[collection[i]] = i;
}
  return result;
}

// 아래에 주어진 케이스에 대응할 수 있도록 `inverse` 함수를 작성해주세요.
// 주어진 두 가지 케이스 외에는 대응하지 않아도 됩니다.
const data1 = { a: 1, b: 2, c: 5 };
const data2 = { name: "ken", age: 30, city: "seoul" };

const result1 = inverse(data1);
const result2 = inverse(data2);

console.log(result1); // { '1': 'a', '2': 'b', '5': 'c' }
console.log(result2); // { 'ken': 'name', '30': 'age', 'seoul': 'city' }