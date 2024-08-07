import React from "react";
import { NavLink } from "react-router-dom";

const Buttons = (props) => {
	
	return (
		<button className="scroll-bottom">
			{props.left && (
				<NavLink to={props.left} className="left hover">
					<span>&#10092;</span>
				</NavLink>
			)}
			{props.right && (
				<NavLink to={props.right} className="right hover">
          <span>&#10093;</span>
				</NavLink>
			)}
		</button>
	);
};

export default Buttons;
