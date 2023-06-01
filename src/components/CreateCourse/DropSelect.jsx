import React, { useState } from 'react';
import { StyledDrop } from './Dropelect.styled';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const DropdownSelect = () => {
	const [selectedValue, setSelectedValue] = useState('');

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	return (
		<Select
			classNamePrefix='custom-select'
			value={selectedValue}
			onChange={handleChange}
		>
			<option value=''>Select an option</option>
			<option value='option1'>Option 1</option>
			<option value='option2'>Option 2</option>
			<option value='option3'>Option 3</option>
		</Select>
	);
};

export default DropdownSelect;
