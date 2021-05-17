import {createStore} from "redux";

const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {  
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1; // 리턴하는것이 곧 데이터이다.
  }
  return count;
} // state는 이곳에서만 modify - 다른 어떤 함수에서도 할 수 없음

const countStore = createStore(countModifier); // store는 데이터를 저장하는 곳이다. 크리에이트 스토어애는 반드시 함수가 들어간다

const onClick = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onClick);

plus.addEventListener("click", () => { countStore.dispatch({ type: "ADD" }) }); // 디스패치로 액션을 보내준다.
minus.addEventListener("click", () => { countStore.dispatch({ type: "MINUS" }) });

console.log(countStore.getState()); // return된 data(state)를 보여줌