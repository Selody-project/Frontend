import { ToggleSelect } from "@components/ToggleSelect";

export default {
	title: "ToggleSelect",
	component: ToggleSelect,
	tags: ["autodocs"],
};

export const SelectBox = {
	args: {
		isArrow: true,
	},
};

export const SelectBoxSelected = {
	args: {
		isArrow: true,
		isSelected: true,
	},
};

export const RadioBox = {
	args: {
		isArrow: false,
	},
};

export const RadioBoxSelected = {
	args: {
		isArrow: false,
		isSelected: true,
	},
};
