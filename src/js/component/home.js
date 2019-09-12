import React from "react";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component
export const Home = props => {
	return (
		<React.Fragment>
			<div className="alert alert-primary" role="alert">
				{props.circus}
			</div>
		</React.Fragment>
	);
};

Home.propTypes = {
	circus: PropTypes.number
};
