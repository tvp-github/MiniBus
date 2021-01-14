import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import colors from "../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
const MainContainerContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const Node = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: ${colors.yellow};
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px ${colors.yellow} solid;
`;
const NodeNum = styled.span`
	margin: auto;
	color: ${colors.white};
	text-align: center;
`;
const Line = styled.div`
	height: 4px;
	background-color: ${colors.yellow};
	margin: 0px;
	padding: 0px;
`;
const MiniProgressBar = ({ active }) => {
	const ref = useRef(null);
	const [w, setW] = useState(0);
	// useEffect(() => {
	// 	// The 'current' property contains info of the reference:
	// 	// align, title, ... , width, height, etc.
	// 	if (ref.current) {
	// 		let width = ref.current.offsetWidth;
	// 		setW(parseInt((width - 4 * 40) / 3));
	// 	}
	// }, [ref]);

	useLayoutEffect(() => {
		function updateSize() {
			if (ref.current) {
				let width = ref.current.offsetWidth;
				setW(parseInt((width - 4 * 40) / 3));
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return (
		<MainContainerContainer ref={ref}>
			{/* <Node>
                <NodeNum>1</NodeNum>
            </Node>
			<Node></Node>
			<Node></Node>
			<Node></Node> */}
			{[1, 2, 3, 4].map((item, index) => (
				<>
					<Node
						style={
							item == active
								? { backgroundColor: colors.white }
								: item > active
								? { backgroundColor: colors.mid_grey }
								: null
						}
					>
						<NodeNum
							style={
								item == active ? { color: colors.yellow } : null
							}
						>
							{item}
						</NodeNum>
					</Node>
					{index < 3 && (
						<Line
							style={{
								width: w,
								backgroundColor:
									index + 1 >= active
										? colors.mid_grey
										: colors.yellow,
							}}
						/>
					)}
				</>
			))}
		</MainContainerContainer>
	);
};

export default MiniProgressBar;
