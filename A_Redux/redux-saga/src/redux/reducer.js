import { Add, Decremet, Increment, Multiply, Subtract } from "./action.type";

export const initialState={
    count: 10 
} 

 const countReducer = (state = initialState,action)=>{

    switch(action.type){
        case Add : return {...state,count:state.count+action.payload};

        case Subtract :return {...state,count:state.count-action.payload};

        case Multiply : return {...state,count:state.count*action.payload};

        case Increment : return {...state,count:state.count+action.payload};

        case Decremet : return {...state,count:state.count-action.payload};

        default : return state;
    }
}

export default countReducer;
