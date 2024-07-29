import React, { useState } from "react";
import { projectsData } from "../data/projectsData";

const Project = ({ projectNumber }) => {
	console.log(projectNumber);
	const [currentProject] = useState(projectsData[projectNumber]);
	console.log(currentProject);
	console.log(projectsData);

	return (
		<div className="project-main">
			<div className="project-content">
				<h1>{currentProject.title}</h1>
			</div>
		</div>
	);
};

export default Project;
