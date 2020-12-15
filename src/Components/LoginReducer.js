const initialState=false

function reducer(state=initialState, action){
    if(action.type === 'HandleLogin'){
        return true;
    }
 
    return state;
}

export default reducer