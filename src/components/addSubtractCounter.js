import { connect } from 'react-redux'

function AddSubtract(e){

const number = e.target.value 

    return(
       <div> <h4>Add/Subtract Counter</h4>
        <input type="text" placeholder="Enter a number to add/subtract"/>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        </div>
    )
}


export default AddSubtract