const swap = function (array, front, back) {
	const tmp = array[front];
	array[front] = array[back];
	array[back] = tmp;
}

const lomutoPartition = function (array, start, end) {
	const pivotValue = array[end]; // lomuto's partition 은 항상 맨끝을 pivot으로 정한다. // array[12] = 21
  console.log(pivotValue);
	let pivotIndex = start;  // 0
  console.log(pivotIndex);

	for (let index = start; index < end; index++) {
		if (array[index] < pivotValue) { // pivotValue보다 작으면   array[0] = 4 < array[12] = 21
			swap(array, index, pivotIndex);	// pivotIndex 와 swap 하고
			pivotIndex += 1; // pivotIndex 증가
		}
	}

	swap(array, pivotIndex, end); // pivotValue를 중간에 오게하기 위해서
	return pivotIndex;
}

const quickSortWithLomuto = function (array, start = 0, end = array.length - 1) { // 초기값: 배열의 시작과 끝
	if (start >= end) return; // ending condition	

	let pivotIndex = lomutoPartition(array, start, end); // 0 , 12로 시작
	quickSortWithLomuto(array, start, pivotIndex - 1); // divide and conquer: left
	quickSortWithLomuto(array, pivotIndex + 1, end); // right
	
	return array;
}


const arr = [4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21];
const result1 = quickSortWithLomuto(arr);





console.log(result1);