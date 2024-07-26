import React from "react";

const SocialNetwork = () => {
	const anim = () => {
		const icon = document.querySelectorAll(".social-network a");

		icon.forEach((link) => {
			link.addEventListener("mouseover", (e) => {
				link.style.transform = `translate(${e.offsetX - 20}px, ${
					e.offsetY - 13
				}px)`;
			});

			link.addEventListener("mouseleave", (e) => {
				link.style.transform = ``;
			});
		});
	};

	return (
		<div className="social-network">
			<ul className="content">
				<a
					href="https://facebook.com"
					target="blank"
					rel="noopener noreferrer"
					className="hover"
					onMouseOver={anim}
				>
					<li>
						<i className="fa-brands fa-facebook-f"></i>
					</li>
				</a>
				<a
					href="https://twitter.com"
					target="blank"
					rel="noopener noreferrer"
					className="hover"
					onMouseOver={anim}
				>
					<li>
						<i className="fa-brands fa-x-twitter"></i>
					</li>
				</a>
				<a
					href="https://instagram.com"
					target="blank"
					rel="noopener noreferrer"
					className="hover"
					onMouseOver={anim}
				>
					<li>
						<i className="fa-brands fa-instagram"></i>
					</li>
				</a>
			</ul>
		</div>
	);
};

export default SocialNetwork;
