import { combineReducers } from 'redux';
import querynumber from './querynumber';
import queryelement from './queryelement';

const QueryParams = combineReducers({
    querynumber,
    queryelement
})

export default QueryParams