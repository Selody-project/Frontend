import { useEffect, useMemo, useState } from "react";

const useObserver = (ref, options) => {
	const [interSecting, setInterSecting] = useState(false);

	const observer = useMemo(
		() =>
			new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					setInterSecting(entry.isIntersecting);
				});
			}, options),
		[],
	);

	useEffect(() => {
		if (ref?.current) {
			observer.observe(ref.current);
		}
		return () => {
			observer.disconnect();
		};
	}, [observer, ref]);

	return interSecting;
};

export default useObserver;
