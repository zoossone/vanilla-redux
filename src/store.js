import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = text => {
    return {
        type: ADD,
        text
    }
}

export const deleteToDo = id =>{
    return {
        tyoe: DELETE,
        id
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{text: action.text, id: Date.now()}, ...state];
        case DELETE:
            return state.filter(ToDo => ToDo.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

// store.subscribe(); // 이 subscribe 함수는 변화가 있을때 우리에게 알려줬다.
// 뭔가 변화가 일어나면 Application을 다시 render 하고싶다.
// 즉 store가 바뀔때마다 다시 render하고싶기 때문에 redux-react에서 store를 subscribe한다.
// * 하지만 실습에서 하는 이 부분은 예전의 방식일지 모른다. 참고만 해두면 좋을것 같다.

export default store;