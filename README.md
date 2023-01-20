# 부산대학교 K-Digital 2기
### Project_JS_02 : Study
* DOM CRUD
* For, For in, For of, Foreach
```javascript
// for 기본타입
const arr[] = {"apple", "banana", "kiwi"};
for(let i = 0; i < arr.length; i++){
  console.log(arr[i]) // apple, banana, kiwi가 순차적으로 출력.
}

// for in 타입
const arr[] = {"apple", "banana", "kiwi"};
for(let i in arr){ // index를 0부터 arr.length-1까지 순환하며 i에 index를 할당하는 요약 구문
  console.log(arr[i]) // apple, banana, kiwi가 순차적으로 출력.
}

// for of 타입
const arr[] = {"apple", "banana", "kiwi"};
for(let item in arr){ // index 0부터 arr.length-1까지 순환하며 item에, arr[index]에 해당하는 값을 할당하는 요약 구문
  console.log(item) // apple, banana, kiwi가 순차적으로 출력.
}

// foreach() 함수 타입
const arr[] = {"apple", "banana", "kiwi"};
arr.foreach( item => { console.log(item) });
  // for of와 동일하게 동작하나 형태만 콜백함수를 인자로 보내게 변경.
  // apple, banana, kiwi가 순차적으로 출력.
}

```
