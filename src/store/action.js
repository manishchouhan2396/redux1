import { Counter_Decreament, Counter_Increament  , Counter_Div , Counter_M , Counter_Add , Counter_Sub} from "./action.type";


export const add = () =>({type:Counter_Increament});
export const substract = () =>({type:Counter_Decreament});
export const div = () =>   ({type:Counter_Div});
export const M = () =>   ({type:Counter_M});
export const Add = () => ({type:Counter_Add});
export const Sub = () => ({type:Counter_Sub})