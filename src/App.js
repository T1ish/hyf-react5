import React from 'react';
import TodoListContainer from './TodoListContainer';
import { Switch, Route } from 'react-router-dom';
import TodoDetails from './TodoDetails';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
        	<Route exact path="/" component={TodoListContainer} />
        	<Route exact path="/:todoDetails" component={TodoDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
