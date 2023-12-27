import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";

import { DownArrowIcon } from "@/constants/iconConstants";
import { SCHEDULE_MODAL_TYPE } from "@/constants/uiConstants";
import useOutsideClick from "@/hooks/useOutsideClick";

import {
	CustomSelectWrapperDiv,
	PickerDiv,
	SelectButton,
} from "./CustomSelect.styles";

const CustomSelect = ({ value, onChange, options }) => {
	const { isLoading, scheduleModalMode } = useSelector(({ ui }) => ui);
	const [isOpen, setIsOpen] = useState(false);

	const wrapperRef = useRef();
	useOutsideClick(wrapperRef, () => isOpen && setIsOpen(false));

	const handleOptionClick = (event) => {
		onChange(event);
		setIsOpen(false);
	};

	return (
		<CustomSelectWrapperDiv ref={wrapperRef}>
			<SelectButton
				onClick={() => setIsOpen((prev) => !prev)}
				className={isOpen ? "activated" : ""}
				disabled={isLoading || scheduleModalMode === SCHEDULE_MODAL_TYPE.VIEW}
			>
				<span>
					{options[options.findIndex((obj) => obj.value === value)].text}
				</span>
				<DownArrowIcon />
			</SelectButton>
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
