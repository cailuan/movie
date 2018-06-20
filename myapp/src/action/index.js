
const existence = (username)=>{
    return {
        type : 'existence',
        payload : username
    }
}
export default existence;