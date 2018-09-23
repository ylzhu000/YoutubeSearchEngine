import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBI4aNzZQ-perN835gL4i4MBGU1v5JnP0k';

class App extends Component { 
	constructor(props) {
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null
		};
		this.updateSearch('React Web App');
	}

	updateSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos, // videos: videos => videos in es6
				selectedVideo: videos[0]
			});
			
		});
	}

	render() {
		// debounce takes a function and call the function 300 sec
		const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 3000);

	 	return (
	 		<div>
	 			<SearchBar updateSearch={ term => { this.updateSearch(term) }} />
	 			<VideoDetail 
	 				video={this.state.selectedVideo} 
	 			/>
	 			<VideoList 
	 				onVideoSelected={selectedVideo => this.setState({ selectedVideo })}
	 				videos={this.state.videos} 
	 			/>
	 		</div>
	 	);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));