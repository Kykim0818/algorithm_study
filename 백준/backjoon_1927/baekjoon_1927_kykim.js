const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let answer = '';
const minHeap = () => {
    const heapData = [0];
    const rootIndex = 1;
    // 삽입
    const push = (value) => {
        heapData.push(value);
        sortPush(heapData.length - 1);
        // currentMinValue = Math.min(currentMinValue, value);
    }
    // 제거
    const pop = () => {
        // 루트노드
        if (heapData.length === 1) {
            answer = answer.concat('0\n');
            // console.log(0);
            return;
        }
        if (heapData.length === 2) {
            //answer.push(heapData.pop());
            answer = answer.concat(heapData.pop()).concat('\n');
            // console.log(heapData.pop());
            return;
        }
        answer = answer.concat(heapData[1]).concat('\n');
        // console.log(heapData[1]);
        heapData[1] = heapData.pop();
        sortPop();
    }
    const sortPush = (pushIndex) => {
        let currentIndex = pushIndex;
        while (currentIndex > 1) {
            const parentIndex = Math.floor(currentIndex / 2);
            const parentValue = heapData[parentIndex];
            if (parentValue > heapData[currentIndex]) {
                swap(heapData, parentIndex, currentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }
    const sortPop = () => {
        let currentIndex = rootIndex;
        while (currentIndex < heapData.length) {
            let leftChildIndex = currentIndex * 2;
            let rightChildIndex = leftChildIndex + 1;
            let changeIndex = leftChildIndex;
            if (heapData[leftChildIndex] > heapData[rightChildIndex]) {
                changeIndex = rightChildIndex;
            }

            if (heapData[currentIndex] > heapData[changeIndex]) {
                swap(heapData, currentIndex, changeIndex);
                currentIndex = changeIndex;
            } else {
                break;
            }
        }
    }
    return {
        push,
        pop
    };
}

const swap = (arr, firstIdx, secondIdx) => {
    const tmp = arr[firstIdx];
    arr[firstIdx] = arr[secondIdx];
    arr[secondIdx] = tmp;
}

const newHeap = minHeap();

arr.forEach((eachInput) => {
    if (eachInput === 0) {
        newHeap.pop();
    } else {
        newHeap.push(eachInput);
    }

})
console.log(answer);