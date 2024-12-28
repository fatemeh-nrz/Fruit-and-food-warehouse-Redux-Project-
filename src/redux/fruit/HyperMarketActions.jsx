import { BUY_APPLE ,BUY_ORANGE ,RESET} from "./HyperMarketActionTypes";

export const buy_apple =(count)=>{
    return {
        type :BUY_APPLE,
        payload:count
    }
}

export const buy_orange =(count)=>{
    return {
        type :BUY_ORANGE,
        payload:count
    }
}

export const reset =()=>{
    return {
        type :RESET
    }
}
