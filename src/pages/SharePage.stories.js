import SharePage from "@/pages/SharePage";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
	title: "SharePage",
	component: SharePage,
	decorators: [withRouter],
	parameters: {
		layout: "fullscreen",
	},
};

export const Demo = {};
