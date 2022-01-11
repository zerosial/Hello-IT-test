console.group('object loop');
let memberObject = {
    manager: 'egoing',
    developer:'grphittie',
    designer: 'leezche'
}

for(let name in memberObject ){ // (현재 원소의 이름이 들어갈 변수) in (객체)
    //객체에 있는 원소의 개수만큼 중괄호가 실행됩니다. 
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');