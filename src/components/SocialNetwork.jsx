import React from "react";

const SocialNetwork = () => {
	return (
		<div className="social-network">
			<ul className="content">
				<a
					href="https://facebook.com"
					target="blank"
					rel="noopener noreferrer"
					className="hover"
				>
					<li>
          <i class="fa-brands fa-facebook-f"></i>
					</li>
				</a>
				<a
					href="https://twitter.com"
					target="blank"
					rel="noopener noreferrer"
					className="hover"
				>
					<li>
          <i class="fa-brands fa-x-twitter"></i>
					</li>
				</a>
				<a
					href="https://instagram.com"
					target="blank"
					rel="noopener noreferrer"
					className="hover"
				>
					<li>
          <i class="fa-brands fa-instagram"></i>
					</li>
				</a>
			</ul>
		</div>
	);
};

export default SocialNetwork;
