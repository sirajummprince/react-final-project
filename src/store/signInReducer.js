const initState = {
    email: null,
    role: null,
    token: null,
    errorMessage: null,
}

const signInReducer = (state=initState, action)=>{
    switch(action.type){
        case 'signin-action':
            return{
                ...state,
                email: action.payload.user,
                role: action.payload.role,
                token: action.payload.token,
            }
            break;
        case 'signin-error':
            return{
                ...state,
                errorMessage: action.payload,
            }
            break;
        default:
            return state;
    }
}

export default signInReducer;
