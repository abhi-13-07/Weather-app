import React from "react";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer>
			<div>
				<p>&copy; Abhishek {year}</p>
				<p>
					Icons made by{" "}
					<a href="https://www.flaticon.com/authors/freepik" title="Freepik">
						Freepik
					</a>{" "}
					from{" "}
					<a href="https://www.flaticon.com/" title="Flaticon">
						{" "}
						www.flaticon.com
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
