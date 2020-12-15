function reducer(state=true, action){
    if(action.type === 'LogOut'){
        return false;
    }
 
    return state;
}

export default reducer    