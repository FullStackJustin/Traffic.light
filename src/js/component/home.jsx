import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="buttonNpole">
			<div className="pole"></div>
			<div className="traffic-light">
				<div
					className={
						"light red" + (setSelectedColor === "red" ? "glow" : "")
					}
					onClick={() => selectedColor("red")}></div>
				<div
					onClick={() => selectedColor("yellow")}
					className={
						"light yellow" +
						(setSelectedColor === "yellow" ? "glow" : "")
					}></div>
				<div
					onClick={() => selectedColor("green")}
					className={
						"light green" +
						(setSelectedColor === "green" ? "glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
