
const Reducer = (state,action)=>{
    const username = state.username;
    switch(action.type){
        case 'existence':
            return {...state,username : action.payload };
        default:
            return {...state}
    }
}
export default Reducer;