import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const getDesc = function(imsi, msisdn, mme){
    console.log('getDesc: ', imsi, msisdn, mme);
    return 'The Query Parameter: IMSI = ' + imsi + ' MSISDN = ' + msisdn + ' MME = ' + mme; 
}
const mapStateToProps = (state) => {
    console.log('mapStateToProps: state=',state);
    return {
    value : getDesc(state.querynumber.imsi, state.querynumber.msisdn, state.queryelement.mme)
    }
}

const mapDispatchToProps = {
}

const FDesc = ({value}) => {
    console.log('FDesc: value=',value);
    return (
        <p>{value}</p> 
    )
}


FDesc.propTypes = {
    value: PropTypes.string.isRequired
}

const FootDesc = connect(
    mapStateToProps,
    mapDispatchToProps
)(FDesc)

export default FootDesc
