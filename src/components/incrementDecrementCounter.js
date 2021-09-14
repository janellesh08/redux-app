import { connect } from "react-redux";

function IncDecByOneCounter(props) {

    const handleIncrement = () => {
        props.onIncrement()
    }

    const handleDecrement = () => {
        props.onDecrement()
    }

    return (
        <div> <h4>Increment/Decrement by 1 Counter</h4>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>          
        </div>
    )
}

// mapStateToProps allows you to read the global state and make it available as properties in your components 
const mapStateToProps = (state)=>{
    return {
        counter: state.counter
    }
}

//this function saves the data in the store
const mapDispatchToProps =(dispatch)=>{
    return{
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'})
    }
}

//this exports all of the above
export default connect(mapStateToProps, mapDispatchToProps)(IncDecByOneCounter);