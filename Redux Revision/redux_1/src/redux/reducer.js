import {Inc_Counter,Dec_Counter} from "./action_type"

const initialState={
    count:0
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case Inc_Counter:
            return {
                ...state,
                count:state.count+action.payload

            }
        case Dec_Counter:
            return {
                ...state,count:state.count-action.payload
            }
        default: return state;
    }
}
