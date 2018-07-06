const querynumber = (state = {}, action) => {
    //console.log('querynumber dispatch: action=',action);
    let state1 = {};
    switch (action.type) {
        case 'MODIFY_IMSI':
            Object.assign(state1, state)
            Object.assign(state1, {imsi : action.text});
            console.log('MODIFYed: state=',state1);
            return state1;
        case 'MODIFY_MSISDN':
            Object.assign(state1, state)
            Object.assign(state1, { msisdn:action.text})
            console.log('MODIFYed: state=',state);
            return state1;
        default:
            return state;
    }
}

export default querynumber