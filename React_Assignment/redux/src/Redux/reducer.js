import { INC_COUNTER,DEC_COUNTER,ADD_TODO } from "./actionType";


const initState={
    count:0,
    todo:[],
    isLoading:false,
    isErr:false
}

const reducer=(state = initState,action)=>{
    switch(action.type){
        case INC_COUNTER:
            return {
                ...state,
                count:state.count+action.payload
            };
            case DEC_COUNTER:
                return {
                    ...state,
                    count:state.count-action.payload
                }

            case ADD_TODO:
                return{
                ...state,
                todo:[...state.todo, action.payload]
                }
            default:
                return state
    }
}

export {reducer}