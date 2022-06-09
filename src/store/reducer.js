import { Counter_Decreament, 
         Counter_Div, 
         Counter_Increament, 
         Counter_M , 
         Counter_Add , 
         Counter_Sub} from "./action.type";

// reducer
export const reducer = (state , {type , payload}) =>{
    // console.log(state ,action)

    switch(type){
        case Counter_Increament:{
            state.count+=payload;
            return {...state}
        }
        case Counter_Decreament:{
            state.count-=payload;
            return {...state}
        }
        case Counter_Div:{
            let result = state.count % payload;
            if(result !== 0){
                alert("Division Not Possible")
                return {...state}
            }else{
                state.count = state.count / payload;
                return {...state};
            }
        }
        case Counter_M:{
            state.count = state.count*payload;
            return {...state}
        }
        case Counter_Add:{
            state.count +=payload;
            return {...state}
        }
        case Counter_Sub:{
            state.count -=payload;
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