import { useEffect } from "react";

const useScrollLock = () => {
	useEffect(() => {
		const { scrollY, innerHeight } = window;
		const hasScrollbar = document.documentElement.scrollHeight > innerHeight;

		document.body.style.cssText = `
		position: fixed;
		top: -${scrollY}px;
		overflow-y: ${hasScrollbar ? "scroll" : "hidden"};
		width: 100%;
		`;

		return () => {
			document.body.style.cssText = "";
			window.scrollTo(0, scrollY);
		};
	}, []);
};

export default useScrollLock;
