import {applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import counterReducer from "./counterReducer";


const store=createStore((counterReducer))

export default store;