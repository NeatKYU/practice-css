import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	.hover-button {
		width: 10rem;
		height: 5rem;
		background-color: burlywood;
		border-radius: 10rem;
		transition: 0.5s;
		text-align: center;
		font-size: 2.4rem;
		line-height: 5rem;
		&:hover {
			width: 15rem;
			height: 7.5rem;
			line-height: 7.5rem;
			font-size: 3rem;
			transition: 0.5s;
			background-color: cadetblue;
		}
	}
`

export const EnlargeButton = () => {

	return (
		<>
			<Wrapper>
				<div className={"hover-button"}>play</div>
			</Wrapper>
		</>
	)
}