import { legacy_createStore ,applyMiddleware,compose,combineReducers} from "redux";
import { clickrReducer } from "./clickpages/click.reducer";



const rootReducer=combineReducers({
    about:clickrReducer
})

const createCompose=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose





export const store =legacy_createStore(rootReducer,createCompose(applyMiddleware()))