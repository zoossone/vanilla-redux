import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store";


function Todo({text, onBtnClick}) {
    return <li>
        {text}<button onClick={onBtnClick}>DEL</button>
        </li>
}

const mapDispatchToprops = (dispatch, ownProps) => {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
};

export default connect(null, mapDispatchToprops)(Todo);