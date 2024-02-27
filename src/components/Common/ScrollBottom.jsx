import React, { useEffect, useRef, useMemo, useState } from "react";

const ScrollBottom = ({ onView }) => {
	const [interSecting, setInterSecting] = useState(false);

	const bottomRef = useRef(null);

	const observer = useMemo(
		() =>
			new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						setInterSecting(entry.isIntersecting);
					});
				},
				{ threshold: 0.3 },
			),
		[],
	);

	useEffect(() => {
		if (interSecting) {
			onView();
		}
	}, [interSecting]);

	useEffect(() => {
		if (bottomRef?.current) {
			observer.observe(bottomRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, [observer, bottomRef]);

	return <div ref={bottomRef} />;
};

export default ScrollBottom;
