import { createStore, combineReducers } from "redux";

//Responsável por atualizar o estado dos componentes
const reducers = combineReducers({
    numeros: function (state, action) {

        switch (action.type) {
            case 'NUM_MIN_ALT':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUM_MAX_ALT':
                return {
                    ...state,
                    max: action.payload
                }
            default:
                return {
                    min: 1,
                    max: 100
                }
        }
    }
})

//Responsável por criar o estado
function storeConfig() {
    return createStore(reducers)
}

export default storeConfig