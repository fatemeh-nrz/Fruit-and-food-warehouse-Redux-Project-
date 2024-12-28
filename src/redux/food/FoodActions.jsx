import { BUY_PASTA, BUY_PIZZA, BUY_SANDWITCH, RESET_FOOD } from "./FoodActionsTypes"

export const buy_pasta =()=>{
    return  {
        type :BUY_PASTA
    }
}

export const buy_sandwitch =()=>{
    return  {
        type :BUY_SANDWITCH
    }
}

export const buy_pizza =()=>{
    return  {
        type :BUY_PIZZA
    }
}

export const reset_food =()=>{
    return {
        type :RESET_FOOD
    }
}

