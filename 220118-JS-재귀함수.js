function f(n) {
    if (n <= 1) {
       return 1 // 종료 조건
    }
    return n + f(n-1) // 재귀함수
}
console.log(f(100)) //5050


let s = 0;
for (var i = 1; i < 101; i++) {
	s += i
};
console.log(s); // 5050