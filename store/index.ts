import {createWrapper, MakeStore} from "next-redux-wrapper";
import {AnyAction, applyMiddleware, createStore} from "redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {reducer, RootState} from "./reducers";

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const makeStore: MakeStore<RootState> = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper<RootState>(makeStore, {debug: process.env.NODE_ENV !== 'production'})

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
