import { Button } from "@/components/Button";

export default {
	title: "Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
		color: { control: "color" },
		fontWeight: { control: { type: "range", min: 400, max: 800, step: 100 } },
		fontSize: { control: "radio", options: [14, 15, 16, 17] },
	},
};

export const Primary = {
	args: {
		label: "Button",
	},
};

export const DarkGrey = {
	args: {
		label: "Button",
		backgroundColor: "#9B9FAA",
	},
};

export const LightGrey = {
	args: {
		label: "Button",
		backgroundColor: "#C9CCD7",
	},
};

export const Black = {
	args: {
		label: "Button",
		backgroundColor: "#383838",
	},
};
