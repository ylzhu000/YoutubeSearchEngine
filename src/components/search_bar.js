import React, {Component} from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		}
	}
	
	onInputChange(term) {
		this.setState({term});	
		this.props.updateSearch(term);
	}

	onUpdateSearch(term) {
		this.props.updateSearch(term);
	}


	render() {
		return (
			<div className="select-bar">
				<input 
					placeholder="Search"
					value={this.state.term}
					onChange={e => this.onInputChange(e.target.value)} 
				/>
				{/* <button type="button" className="btn btn-primary btn-sm" onClick={(current_term) => this.onUpdateSearch(current_term) }>Search</button>*/}
			</div>
		);
	}
}