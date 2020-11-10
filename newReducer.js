newReducer = (state = {inCount: 0}, action) => {
    let currentState=state.inCount;
    switch(action.type)  {
        case "INC":
            return Object.assign({}, state,
                {inCount:currentState+parseInt(action.step)});
        default:
            return state;
    }
}

export default newReducer;