import { Add, Subtract } from "./action.type"

export const AddAction = (data)=>({
    type:Add,
    payload:data
    
});

export const SubtractAction= (data)=>({
    type:Subtract,
    payload:data,
})

export const MultiplyAction= (data)=>({
    type:Subtract,
    payload:data,
});

export const IncrementAction= (data)=>({
    type:Subtract,
    payload:data,
});

export const DecremntAction= (data)=>({
    type:Subtract,
    payload:data,
});

