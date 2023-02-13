import React, { useEffect, useRef, useState } from 'react'

import { useWindowScrollEvent } from 'hooks/useWindowScrollEvent'
import { checkIsInViewport } from 'util/checkIsInViewport'
import styled, { css, keyframes } from 'styled-components'

function ScrollRevealSlideAnimation({
	children,
	direction = 'top',
	time = '1s'
}) {
	const elemRef = useRef(null)
	const [isInViewPort, setIsInViewPort] = useState(checkIsInViewport(elemRef.current))

	useEffect(() => {
		//elemRef이 초기에 값이 바로 들어오지 않아
		//elemRef가 undefined가 아닐 때 isInViewPort 값을 다시 할당한다.
		setIsInViewPort(checkIsInViewport(elemRef.current))
		
		// eslint-disable-next-line
	}, [elemRef.current === undefined])

	//스크롤이 될때마다 element가 뷰포트 영역 안인지 체크
	useWindowScrollEvent(() => {
		console.log('scroll')
		setIsInViewPort(checkIsInViewport(elemRef.current))
	})
	
	return (
		<Wrapper ref={elemRef} isInViewPort={isInViewPort} direction={direction} time={time}>
			{children}
		</Wrapper>
	)
}

export default ScrollRevealSlideAnimation

const Wrapper = styled.div`
	width: 100%;
	${({ isInViewPort, direction, time }) => {
		if(direction === 'none')return
		
		const axis = direction === 'top' || direction === 'bottom' ? 'Y' : 'X'
		const dir = direction === 'bottom' || direction === 'right' ? '-1' : '1'
		const tm = time

		const [translateForm, translateTo] = [
			`translate${axis}(${4 * dir}rem)`,
			`translate${axis}(0)`,
		]
		const defaultStyle = css`
			transform: ${translateForm};
			opacity: 0;
		`
		const keyframe = keyframes`
			from { transform: ${translateForm}; opacity: 0; }
			to {transform: ${translateTo}; opacity:1;}
		`
		const animationRule = css`
			${keyframe} ${tm} ease
		`

		//isInViewPort가 true라면
		//방향에 따라 translate(이동) 애니메이션을 실행한다.
		return css`
			${!isInViewPort && defaultStyle}
			animation : ${isInViewPort && animationRule};
		`
	}}
`





/*

예시 : 

<div style={{width:'100%', height:'500px', border:'1px solid black'}}>
	<ScrollRevealSlideAnimation direction={'top'} time={'1s'}>
			<h1>첫 번째 글자</h1>
	</ScrollRevealSlideAnimation>
</div>


*/