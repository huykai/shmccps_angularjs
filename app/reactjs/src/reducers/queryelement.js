const queryelement = (state = {}, action) => {
    //console.log('queryelement dispatch: action=',action);
    let state1 = {};
    switch (action.type) {
        case 'MODIFY_MME':
            Object.assign(state1, state)
            Object.assign(state1, { mme: action.text})
            return state1
        default:
            return state;
    }
    
}

export default queryelement