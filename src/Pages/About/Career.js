import ScrollRevealSlideAnimation from "Components/ScrollRevealSlideAnimation"
import styled from "styled-components"

function Career() {
	return (
		<ScrollRevealSlideAnimation direction={'left'} time={'500ms'}>
			<table>
				<tbody>
					<tr>
						<th rowSpan='4'>My Career</th>
						<th>1 Year</th>
						<td colSpan='2'>
							<CareerSpan>
								<Type>[경력]</Type>
								<Title>이에스티 소프트 2021.10 ~ 2022.10</Title>
								<br/>
								[파견 개발 : 스마트로PG] <br/>
								서버 고도화 및 관리자 웹 유지/보수
							</CareerSpan>
						</td>
					</tr>
					<tr>
						<th>In Office</th>
						<td colSpan='2'>
							<CareerSpan>
								<Type>[경력]</Type>
								<Title>스마트로PG 2022.10 ~</Title>
								<br/>
								[프리랜서 : 스마트로PG] <br/>
								관리자 웹 유지/보수 프리랜서
							</CareerSpan>
						</td>
					</tr>
					<tr>
						<th>Web Sites</th>
						<td colSpan='2'>
							<CareerSpan>
								<Type>[외주]</Type>
								<Title>기업형 웹 제작 2022.10 ~</Title>
								<br/>
								[프리랜서 기업형 웹 제작] <br/>
								기업 소개형 웹 개인 외주 제작
							</CareerSpan>
						</td>
					</tr>
				</tbody>
			</table>
		</ScrollRevealSlideAnimation>
	)
}

export default Career

const CareerSpan = styled.span`
	font-size: 2rem;
	display:inline-block;
	font-family: 'Nanum';
	line-height:2.3rem;
`

const Type = styled.span`
	font-size: 1.4rem;
	display:inline-block;
`

const Title = styled.span`
	font-size: 1.8rem;
	display:inline-block;
	margin:0 .5rem;
`