import { BUY_PASTA, BUY_PIZZA, BUY_SANDWITCH , RESET_FOOD } from "./FoodActionsTypes";

const foodStates ={
    pasta :10,
    sandwitch :20 ,
    pizza :30
}

const foodReducers =(state = foodStates , action)=>{

    switch (action.type) {
        case BUY_PASTA:
            return {
                ...state ,pasta :state.pasta-1
            }
        case BUY_SANDWITCH:
            return {
                    ...state ,sandwitch :state.sandwitch-1
                }  
        case BUY_PIZZA:
            return {
                        ...state ,pizza :state.pizza-1
                    }

        case RESET_FOOD:
    
        return {
                  
        pasta :10 ,
        sandwitch :20,
        pizza :30
        }
        default:
            return state
        
    }
}

export default foodReducers;
