import styled from 'styled-components';

export const Item = (props) => {

	const { name, content } = props;

	return (
		<Container>
			{name}
		</Container>
	)
}

const Container = styled.div`
	width: 200px;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 5px;

	background-color: #fff;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`