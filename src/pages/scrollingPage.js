import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Item } from '../practice/scrolling/Item';
import ReactLoading from 'react-loading';
import { useInView } from 'react-intersection-observer';

//무한 스크롤링 구현 페이지
const ScrollingPage = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [currentList, setCurrentList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [ref, inView] = useInView();
	
	const callList = useCallback(async () => {
		setIsLoading(true);
		await axios.get(`/api/list/get/${currentPage}`)
		.then((result) => {
			const temp = currentList.concat(...result.data);
			setCurrentList(temp);
		})
		setIsLoading(false)
		setCurrentPage(currentPage+1)
	}, [currentPage])

	useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !isLoading) {
			callList();
    }
  }, [inView, isLoading])

	useEffect(() => {
		callList();
	}, [])

	return (
		<Container>
			{currentList && currentList.map((item,index) => (
				<Item name={item.name}/>
			))}
			<div ref={ref}>
			{ isLoading && 
				<ReactLoading type={"spokes"} color={"#121212"}/> 
			}
			</div>
		</Container>
	)
}

export default ScrollingPage;

const Container = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	
	.target {
		width: 100%;
		height: 100px;
	}
`