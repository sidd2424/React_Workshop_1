function reducer(state=true, action){
    if(action.type === 'setCardData'){
        return action.setCardData;
    }
 
    return state;
}

export default reducer    