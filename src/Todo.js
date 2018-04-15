import React from 'react';
import { Link } from 'react-router-dom';

class Todo extends React.Component {
	
	render(){
		const {todo, index, deleteTodoItem, updateTodoItem} = this.props;
		return(
			<li className={todo.done ? 'checked' : 'unchecked'}> 
				<Link to={todo._id}>
				  {todo.description}
				</Link>
				  
				  <input 
				  	type='checkbox'
				  	checked={todo.done}
				  	onChange={() => { 
				  		updateTodoItem(index);

				  	}}
				  /> 
				   
				  <button 
				  	onClick={() => { 
				  		deleteTodoItem(index); 
				  	}}
				  >
				  	Delete
				  </button>
				
			</li>

			);
	}
}

export default Todo; 