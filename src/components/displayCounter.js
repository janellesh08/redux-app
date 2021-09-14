import { connect } from 'react-redux'

function DisplayCounter(props) {
    return (
        <h2>{props.counter}</h2>
    )
}

//this function displays the data from the store
const mapStateToProps = (state)=>{
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter)