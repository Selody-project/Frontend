import { useEffect, useMemo, useState } from "react";

/**
 * @param {React.MutableRefObject} ref useRef로 생성
 * @param {IntersectionObserverInit} options 옵저버 옵션
 * @returns
 */

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
