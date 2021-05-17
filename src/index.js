import {createStore} from "redux";

const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD"; // string의 오타를 쉽게 잡아줄 수 있다.
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {  
  switch (action.type) { // action에는 항상 type property가 존재해야 한다. switch를 쓰는편이 좋다
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
} // state는 이곳에서만 modify - 다른 어떤 함수에서도 할 수 없음

const countStore = createStore(countModifier); // store는 데이터를 저장하는 곳이다. 크리에이트 스토어애는 반드시 함수가 들어간다

const onClick = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onClick);

plus.addEventListener("click", () => { countStore.dispatch({ type: ADD }) }); // 디스패치로 액션을 보내준다.
minus.addEventListener("click", () => { countStore.dispatch({ type: MINUS }) });

console.log(countStore.getState()); // return된 data(state)를 보여줌