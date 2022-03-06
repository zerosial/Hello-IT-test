/*

  < Reference basic 1 >

  💬 를 적절한 값으로 고쳐주세요!

*/

const person1 = { name: "Jett", age: 30 };
const person2 = { name: "Jett", age: 30 };

const result = (person1 === person2);

console.log(result);

if (result === false ) {
  alert("🎉");
}

/*

  < Reference basic 2 >

  💬 를 적절한 값으로 고쳐주세요!

*/

const person1 = { name: "Jett", age: 30 };
const person2 = person1;

person2.name = "Ken";

const result = (person1.name + person2.name);

if (result === "KenKen"){
  alert("🎉");
}


/*

  < Copy ID >

  신분증을 복사할 수 있는 두 개의 함수가 있습니다.

  각 함수를 통해 복사한 신분증의 이름이 무엇인지

  💬 를 적절한 값으로 고쳐주세요!

*/

const ID = { name: "Jett", age: 30 };

function copyMachine1(obj1) {
  const newID1 = {};

  for (const key in obj1) {
    newID1[key] = obj1[key];
  }

  return newID1;
}

function copyMachine2(obj2) {
  const newID2 = obj2;

  return newID2;
}

const copyID1 = copyMachine1(ID);
const copyID2 = copyMachine2(ID);

ID.name = "Ken";

const result1 = (copyID1.name === "Jett");
const result2 = (copyID2.name === "Ken");

if (
  result1 &&
  result2
) {
  alert("🎉");
}

/*

  < Reference basic 3 >

  💬 를 적절한 값으로 고쳐주세요!

*/

const fruitList = ["Apple", "Banana"];
const fruitList2 = fruitList;

fruitList2.push("Melon");

const fruit1 = fruitList[fruitList.length - 1];
const fruit2 = fruitList2[fruitList2.length - 1];

const result = (fruit1 + fruit2);

if (result === "MelonMelon") {
 alert("🎉");
}