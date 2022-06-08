import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
let initailState = {
    count:0,
}

export const store = legacy_createStore(reducer , initailState);