import React, { useState } from "react";

const Input = (props) => {
	const [inputValue, setInputValue] = useState("");
	return (
		<form
			action=""
			onSubmit={(e) => {
				e.preventDefault();
				props.getInput(inputValue);
				setInputValue("");
			}}
			className="form-container">
			<input
				type="text"
				name="city"
				placeholder="Search by City..."
				value={inputValue}
				autoComplete="off"
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</form>
	);
};

export default Input;
