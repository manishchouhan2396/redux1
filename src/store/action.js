import { Counter_Decreament, 
         Counter_Increament  , 
         Counter_Div , 
         Counter_M , 
         Counter_Add , 
         Counter_Sub} from "./action.type";


export const add = (val) =>{

    return {type:Counter_Increament,
    payload: val,
  };
}

export const substract = (val) =>{
    return {type:Counter_Decreament,
    payload: val,
  };
}
    

export const div = (val) =>   {
     return {type:Counter_Div,
    payload: val,
  };
}
   
export const M = (val) =>   {
     return {type:Counter_M,
    payload: val,
  };
}

export const Add = (val) => {
        return {type:Counter_Add,
    payload: val,
  };
}


export const Sub = (val) => {
     return {type:Counter_Sub,
    payload: val,
  };
}
   