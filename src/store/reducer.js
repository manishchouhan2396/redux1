import { Counter_Decreament, Counter_Div, Counter_Increament, Counter_M , Counter_Add , Counter_Sub} from "./action.type";

// reducer
export const reducer = (state , action) =>{
    // console.log(state ,action)

    switch(action.type){
        case Counter_Increament:{
            state.count++
            return {...state}
        }
        case Counter_Decreament:{
            state.count--;
            return {...state}
        }
        case Counter_Div:{
            state.count = Math.floor(state.count/2);
            return {...state}
        }
        case Counter_M:{
            state.count = state.count*2;
            return {...state}
        }
        case Counter_Add:{
            state.count +=2;
            return {...state}
        }
        case Counter_Sub:{
            state.count -=2;
            return {...state}
        }
        default:{
            return state;
        }
    }




    // if(action.type === 'add'){
    //     state.count++;
    // }else if(action.type === 'substract'){
    //     state.count--;
    // }
    
    // return {...state}
}