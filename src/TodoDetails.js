import React from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'http://hyf-react-api.herokuapp.com/todos';

class TodoDetails extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todo: null,
			error: '',
		};
		this.fetchData = this.fetchData.bind(this);
	}

    componentDidMount() {
    	setTimeout(this.fetchData, 0);
  	}

  	fetchData(){
  		fetch(`${API_URL}/${this.props.match.params.todoDetails}`)
			.then((response) => response.json())
			.then((body) => {
				this.setState({
					todo: body	
				})
			})
			.catch(() => this.setState({error: 'Error - Cannot load data'}));
  	}

	render(){
		const { todo, error } = this.state;
		return(
			<div>
				{ error }
				{
					todo && 
					"Description: " + todo.description
				}	
				<br />
				{				
					todo &&
					"Deadline: " + todo.deadline
				}
				<hr />
				<Link to="/">
					<button>Back</button>
				</Link>
			</div>
			);
	}
}

export default TodoDetails;