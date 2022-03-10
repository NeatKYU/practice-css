import { useState } from 'react';
import styled from 'styled-components';

//색깔같은거 변수로 집어넣게 할수있는 컴포넌트와 
//사이즈 조정 변수도 있게끔 변경하는게 최종안

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	.toggle-box {
		position: relative;
		width: 5rem;
		height: 5rem;
		background-color: black;
		border-radius: 0.4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		overflow: hidden;

		.line1 {
			position: absolute;
			width: 3rem;
			height: 0.4rem;
			background-color: red;
			border-radius: 0.5rem;
			transition: 0.5s;
		}
		.line2 {
			position: absolute;
			width: 2rem;
			height: 0.4rem;
			right: 1rem;
			background-color: red;
			border-radius: 0.5rem;
			transition: 0.5s;
			transform: translateY(1rem);
		}
		.line3{
			position: absolute;
			width: 2rem;
			height: 0.4rem;
			left: 1rem;
			background-color: red;
			border-radius: 0.5rem;
			transition: 0.5s;
			transform: translateY(-1rem);
		}
		.line1.active {
			transform: translateX(5rem);
		}
		.line2.active{
			width: 4rem;
			transform: translateX(0.5rem) translateY(0rem) rotate(-45deg);
		}
		.line3.active{
			width: 4rem;
			transform: translateX(-0.5rem) rotate(45deg);
		}
	}
	
`

const Toggle = () => {

	const [isToggle, setIsToggle] = useState(false);

	const handleToggle = () => {
		setIsToggle(!isToggle);
	}

	return (
		<>
			<Wrapper>
				<div 
					className={"toggle-box"}
					onClick={handleToggle}
				>
					<span className={`line1 ${isToggle ? "active" : ""}`}></span>
					<span className={`line2 ${isToggle ? "active" : ""}`}></span>
					<span className={`line3 ${isToggle ? "active" : ""}`}></span>
				</div>

			</Wrapper>
		</>
	)
}

export default Toggle;