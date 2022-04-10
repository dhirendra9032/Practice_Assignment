import { Add, Subtarct } from "./action.type"

export const AddAction = (data)=>({
    type:Add,
    payload:data
    
});

export const SubtractAction= (data)=>({
    type:Subtarct,
    payload:data,
})

export const MultiplyAction= (data)=>({
    type:Subtarct,
    payload:data,
});

export const IncrementAction= (data)=>({
    type:Subtarct,
    payload:data,
});

export const DecremntAction= (data)=>({
    type:Subtarct,
    payload:data,
});

