import { useEffect } from "react";

const useOutsideClick = (ref, trigger) => {
	useEffect(() => {
		const handleClick = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			trigger();
		};
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [ref, trigger]);
};

export default useOutsideClick;
