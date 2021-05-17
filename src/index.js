import {createStore} from "redux";

const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {
  return count;
} // state는 이곳에서만 modify - 다른 어떤 함수에서도 할 수 없음

const countStore = createStore(countModifier); // 크리에이트 스토어애는 반드시 함수가 들어간다

console.log(countStore.getState()); // return된 data(state)를 보여줌