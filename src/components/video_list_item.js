import React from 'react';

const VideoListItem = (props) => {
	const video = props.video;
	const imageUrl = props.video.snippet.thumbnails.default.url;
	const videoTitle = props.video.snippet.title;
	const videoSelected = props.onVideoSelected;

	return (
		<li onClick={() => videoSelected(video) } className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
			
			<div className="media-body">
				<div className="media-heading">
					{videoTitle}
				</div>
			</div>
			</div>
		</li>
	);	
}

export default VideoListItem;