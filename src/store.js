import {createStore} from "redux";
import {createAction, createReducer} from "@reduxjs/toolkit";


const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{text: action.payload, id: Date.now()}, ...state];
//         case deleteToDo.type:
//             return state.filter(ToDo => ToDo.id !== action.payload);
//         default:
//             return state;
//     }
// };

const reducer = createReducer([], (builder) => {
    builder.addCase(addToDo, (state, action) => {
        state.push({text: action.payload, id: Date.now()})
    })
    .addCase(deleteToDo, (state, action) => {
        return state.filter(ToDo => ToDo.id !== action.payload)
    })
})

const store = createStore(reducer);

// store.subscribe(); // 이 subscribe 함수는 변화가 있을때 우리에게 알려줬다.
// 뭔가 변화가 일어나면 Application을 다시 render 하고싶다.
// 즉 store가 바뀔때마다 다시 render하고싶기 때문에 redux-react에서 store를 subscribe한다.
// * 하지만 실습에서 하는 이 부분은 예전의 방식일지 모른다. 참고만 해두면 좋을것 같다.
export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;