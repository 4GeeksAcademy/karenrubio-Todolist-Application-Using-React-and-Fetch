import React from "react";
import { useEffect } from "react";

//include images into your bundle
import Todo from "./todo";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Todo/>
			
		</div>
	);
};

export default Home;
