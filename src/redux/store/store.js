import { combineReducers, createStore } from "redux";
import { guardarDatos, obtenerDatos } from "../../componente/LocalStorage";
import { citasReducers } from "../reducers/citasReducers";
import { reducerLogin } from "../reducers/reducerLogin";

const reducers = combineReducers({
    citasStore : citasReducers,
    login: reducerLogin
})

const stateLocalStorage = obtenerDatos()

export const store = createStore(
    reducers,
    stateLocalStorage,    
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(()=>{
    guardarDatos({
        citas: store.getState().citas
    })
})