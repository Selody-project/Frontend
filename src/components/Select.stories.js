import { Select } from "@/components/Select";

export default {
	title: "Select",
	component: Select,
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
		color: { control: "color" },
		fontWeight: { control: { type: "range", min: 400, max: 800, step: 100 } },
		fontSize: { control: "radio", options: [14, 15, 16, 17,23] },
	},
};

export const Primary = {
	args: {
		label: "2024년 4월",
		fontSize: 23,
		marginLeft: 12,
		width: 145,
		height: 28,
	},
};

export const Group = {
	args: {
		label: "그룹 A",
		color: "#30374F",
		width: 137,
		height: 33,
		border: "1px solid #C9CCD7",
		marginLeft: 64,
	},
};
