# TypeScript


---

## TypeScript란?
**JavaScript에 타입(Type) 기능을 추가한 언어**

- 코드 작성 단계에서 에러를 미리 잡아주고
- 더 안전하고 유지보수하기 쉬운 코드를 작성할 수 있게 해준다

---

## TypeScript 패키지 설치

### 글로벌 설치
```npm install -g typescript```

### 설치 확인
```tsc -v```

### TypeScript → JavaScript 변환
```tsc 파일이름.ts```
#### 💡 트랜스파일 과정에서 타입 정보는 제거되고, 순수 JS 파일이 생성됨


---
## 기본 자료형
### boolean
```const active: boolean = true;```

### number
```
const decimal: number = 9;
const hex: number = 0xf00d
const binary: number = 0b1010
const octal: number = 0o744;
```

### string
```const str: string = '문자열';```


### 배열(Array) 타입 선언 방법
#### 1️⃣ number[] 방식
```const firstArr: number[] = [1, 2, 3];```

#### 2️⃣ Array<number> 방식 (제네릭 사용)
```const secondArr: Array<number> = [4, 5, 6];```

#### 두 방식 모두 동일하게 동작함
#### 복잡한 자료형에서는 가독성 때문에 제네릭(Array<...>) 방식을 주로 사용
```function example(arg: Array<{ label: string, value: string }>) {}```


### 객체(object)
#### 원시 자료형이 아닌 모든 자료형 값을 가리킴
#### 여러 속성이 포함될 수 있으며, 속성 값은 원시 자료형, 객체, 함수 등

```
function greetUser(user: { name: string, age: number }) {
    console.log(`hello ${user.name}`);
}
greetUser({ name: 'ym', age: 30 });
```

### 튜플(Tuple)
#### 배열의 원소별 타입을 고정할 수 있음

```
let myTuple: [string, number, string];
myTuple = ['hi', 5, 'hello'];
```