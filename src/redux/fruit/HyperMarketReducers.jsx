import { BUY_APPLE, BUY_ORANGE, RESET } from "./HyperMarketActionTypes"

const hyperMarketState ={
    apple :10 ,
    orange: 20,
    banana: 100

}

const hyperMarketReducers =(state = hyperMarketState , action)=>{
switch (action.type) {
    case BUY_APPLE:
     
    return{
        ...state , apple :state.apple-action.payload
    }

    case BUY_ORANGE:
     
    return{
        ...state , orange :state.orange-action.payload
    }

    case RESET:  
    return{
        apple :10 ,
        orange: 20,
        banana: 100
    }

    default:
       return state
}
}

export default hyperMarketReducers;