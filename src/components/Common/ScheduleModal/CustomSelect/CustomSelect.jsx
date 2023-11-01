import React, { useRef, useState } from "react";

import PropTypes from "prop-types";

import { DownArrowIcon } from "@/constants/iconConstants";
import useOutsideClick from "@/hooks/useOutsideClick";

import {
	CustomSelectWrapperDiv,
	PickerDiv,
	SelectDiv,
} from "./CustomSelect.styles";

const CustomSelect = ({ value, onChange, options }) => {
	const [isOpen, setIsOpen] = useState(false);

	const wrapperRef = useRef();
	useOutsideClick(wrapperRef, () => isOpen && setIsOpen(false));

	const handleOptionClick = (event) => {
		onChange(event);
		setIsOpen(false);
	};

	return (
		<CustomSelectWrapperDiv ref={wrapperRef}>
			<SelectDiv
				onClick={() => setIsOpen((prev) => !prev)}
				className={isOpen ? "activated" : ""}
			>
				<span>
					{options[options.findIndex((obj) => obj.value === value)].text}
				</span>
				<DownArrowIcon />
			</SelectDiv>
			{isOpen && (
				<PickerDiv>
					{options.map((obj) => (
						<button
							key={obj.value}
							type="button"
							className={obj.value === value ? "selected" : ""}
							value={obj.value}
							onClick={handleOptionClick}
						>
							{obj.text}
						</button>
					))}
				</PickerDiv>
			)}
		</CustomSelectWrapperDiv>
	);
};

CustomSelect.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export default CustomSelect;
