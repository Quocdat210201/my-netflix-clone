import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleLeware = [thunk];
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleLeware))
);
export default store;