import {Inc_Counter,Dec_Counter} from "./action_type"

const incCounter=(payload)=>({
    type:Inc_Counter,
    payload
});

const decCounter=(payload)=>({
    type:Dec_Counter,
    payload
})

export {incCounter,decCounter}