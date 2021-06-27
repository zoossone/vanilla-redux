import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store";
import {Link} from "react-router-dom";


function Todo({text, onBtnClick, id}) {
    return <li>
        <Link to={`/${id}`}>
        {text}
        </Link>
        <button onClick={onBtnClick}>DEL</button>
        </li>
}

const mapDispatchToprops = (dispatch, ownProps) => {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
};

export default connect(null, mapDispatchToprops)(Todo);