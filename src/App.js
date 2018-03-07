import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Masuk from './components/Masuk';
import Masuk2 from './components/Masuk2';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			active: 0
		}
	}
	changeName = name => this.setState({name})
	changeActive = active => this.setState({active})
  render = () =>
		<div id="app" className="panel panel-default awal col-xs-4 col-xs-offset-4">
    <div className="container-fluid">
			<ul className="nav nav-tabs nav-justified">
				<li className="nav-item">
					<Link to='/Masuk' 
						onClick={() => this.changeActive(0)} 
						className={`nav-link ${this.state.active === 0 ? 'active' : ''}`}
					>Login</Link>
				</li>
				<li className="nav-item">
					<Link to='/Masuk2'
						onClick={() => this.changeActive(1)} 
						className={`nav-link ${this.state.active === 1 ? 'active' : ''}`}
					>Welcome</Link>
				</li>
			</ul>
			<div id="display">
        <Route exact path='/' component={Masuk}/>
				<Route path='/' render={() => <Redirect to='/login'/>}/>
				<Route path='/Masuk' render={() => <Masuk changeActive={this.changeActive.bind(this)} changeName={this.changeName.bind(this)}/>}/>
				<Route path='/Masuk2' render={() => <Masuk2 name={this.state.name}/>}/>				
			</div>
      </div>
		</div>
}

export default App;