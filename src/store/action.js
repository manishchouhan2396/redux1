import { Counter_Decreament, Counter_Increament  , Counter_Div , Counter_M} from "./action.type";


export const add = () =>({type:Counter_Increament});
export const substract = () =>({type:Counter_Decreament});
export const div = () =>   ({type:Counter_Div});
export const M = () =>   ({type:Counter_M});