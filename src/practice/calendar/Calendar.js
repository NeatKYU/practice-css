import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.calendar-body {
		width: 20rem;
		height: 20rem;
		/* background-color: blue; */
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
		.title {
			width: 100%;
			height: 20%;
			background-color: #1fffff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.right-button{
				cursor: pointer;
				font-size: 1.4rem;
				margin-right: 0.5rem;
			}
			.left-button{
				cursor: pointer;
				font-size: 1.4rem;
				margin-left: 0.5rem;
			}
			.title-center{
				height: 100%;
				width: 50%;
				text-align: center;
				line-height: 1.5;
				.title-year{
					width: 100%;
					height: 40%;
				}
				.title-month{
					width: 100%;
					height: 60%;
					font-size: 1.5rem;
				}
			}
		}
		.day-of-week {
			width: 100%;
			height: 2rem;
			background-color: chartreuse;
			display: flex;
			justify-content: space-evenly;
			text-align: center;
			line-height: 1.7;
			.day{
				width: 11%;
				height: 100%;
			}
		}
		.under-day-of-week {
			width: 100%;
			height: 70%;
			background-color: coral;
			display: flex;
			justify-content: space-evenly;
			flex-direction: column;
			text-align: center;
			line-height: 1.7;
			.week{
				width: 100%;
				height: 2rem;
				background-color: cornflowerblue;
				display: flex;
				justify-content: space-evenly;
				.day-box {
					width: 11%;
					height: 100%;
					background-color: whitesmoke;
				}
			}
		}
	}
`

export const Calendar = () => {

	const now = new Date();
	const [currentYear, setCurrentYear] = useState(0)
	const [currentMonth, setCurrentMonth] = useState(0);
	const [currentDay, setCurrentDay] = useState([]);
	
	useEffect(() => {
		setCurrentYear(now.getFullYear());
		setCurrentMonth(now.getMonth()+1);
	}, [])

	useEffect(() => {
		setCurrentDay(calcDayList(currentYear, currentMonth));
	}, [currentMonth])

	const handlePrevClick = () => {
		if(currentMonth === 1){
			setCurrentMonth(12);
			setCurrentYear(currentYear-1);
		} else {
			setCurrentMonth(currentMonth-1);
		}
	}
	
	const handleNextClick = () => {
		if(currentMonth === 12){
			setCurrentMonth(1);
			setCurrentYear(currentYear+1);
		} else {
			setCurrentMonth(currentMonth+1);
		}
	}


	return (
		<>
			<Wrapper>
				<div className={"calendar-body"}>
					<div className={"title"}>
						<div className={"left-button"} onClick={handlePrevClick}>
							<MdArrowBackIosNew/>
						</div>
						<div className={"title-center"}>
							<div className={"title-month"}>{currentMonth}</div>
							<div className={"title-year"}>{currentYear}</div>
						</div>
						<div className={"right-button"} onClick={handleNextClick}>
							<MdArrowForwardIos/>
						</div>
					</div>
					<div className={"day-of-week"}>
						<div className={"day"}>
							일
						</div>
						<div className={"day"}>
							월
						</div>
						<div className={"day"}>
							화
						</div>
						<div className={"day"}>
							수
						</div>
						<div className={"day"}>
							목
						</div>
						<div className={"day"}>
							금
						</div>
						<div className={"day"}>
							토
						</div>
					</div>
					<div className={"under-day-of-week"}>
						<div className={"week"}>
							{currentDay && 
								currentDay.slice(0,7).map((item) => {
									return (
										<div className={"day-box"}>{item}</div>
									)
								})
							}
						</div>
						<div className={"week"}>
							{currentDay && 
									currentDay.slice(7,14).map((item) => {
										return (
											<div className={"day-box"}>{item}</div>
										)
									})
								}
						</div>
						<div className={"week"}>
							{currentDay && 
									currentDay.slice(14,21).map((item) => {
										return (
											<div className={"day-box"}>{item}</div>
										)
									})
								}
						</div>
						<div className={"week"}>
							{currentDay && 
									currentDay.slice(21,28).map((item) => {
										return (
											<div className={"day-box"}>{item}</div>
										)
									})
								}
						</div>
						<div className={"week"}>
							{currentDay && 
									currentDay.slice(28,35).map((item) => {
										return (
											<div className={"day-box"}>{item}</div>
										)
									})
								}
						</div>
						{
							currentDay.length > 35 &&
							<div className={"week"}>
								{currentDay && 
										currentDay.slice(35,42).map((item) => {
											return (
												<div className={"day-box"}>{item}</div>
											)
										})
									}
							</div>
						}
					</div>
				</div>
			</Wrapper>
		</>
	)
}

const calcDayList = (year, month) => {
	let dayList = [];
	let firstDate = new Date(year+"-"+month+"-01");
	let lastDate = new Date(year, month, 0);

	const startBlankBox = firstDate.getDay();
	const endBlankBox = lastDate.getDay();

	for(let i=0; i<startBlankBox; i++){
		dayList.push("");
	}

	for(let i=1; i<=lastDate.getDate(); i++){
		dayList.push(i);
	}

	for(let i=endBlankBox; i<6; i++){
		dayList.push("")
	}

	return dayList;
}