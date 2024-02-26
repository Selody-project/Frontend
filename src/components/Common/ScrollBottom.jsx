import React, { useEffect, useRef } from "react";

import useObserver from "@/hooks/useObserver";

const ScrollBottom = ({ onView }) => {
	const bottomRef = useRef(null);
	const isOnView = useObserver(bottomRef, { threshold: 0.3 });

	useEffect(() => {
		if (isOnView) {
			onView();
		}
	}, [isOnView]);

	return <div ref={bottomRef} />;
};

export default ScrollBottom;
