var React = require('react');
var SubscribeModal = require('./SubscribeModal.js');

class Header extends React.Component {
	render() {
		var subscribeModal;
		if(!((queryParams && queryParams.hasOwnProperty('subscribe')) || BRANCH === 'master')) {
			subscribeModal = (<SubscribeModal></SubscribeModal>);
		}
		return (
			<header className="header text-center">
				<div className="img-container">
					<span className="header-img-container">
						<img src="assets/img/icon.png" alt="Gem" className="img-responsive"/>
						<span className="dejavu-title">
							Dejavu
						</span>
					</span>
				</div>
				<div className="tag-line">
					The Missing Web UI for Elasticsearch
				</div>
				{subscribeModal}
			</header>
		);
	}
}

module.exports = Header;
