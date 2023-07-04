import ScrollRevealSlideAnimation from "Components/ScrollRevealSlideAnimation";
import ContentWrapper from "Components/Wrapper/ContentWrapper";
import React from "react";
import styled from "styled-components";

function Smartro() {
	return (
		<ScrollRevealSlideAnimation direction={"left"} time={"500ms"}>
			<ContentWrapper>
				<h4>Summary</h4>
				<StackSpan>
					스마트로 백오피스 서버 유지보수 및 신규(및 수정) 기능 / 화면
					등 개발
				</StackSpan>
				<Table>
					<tbody>
						<tr>
							<th>서버</th>
							<Td colSpan="5">
								내부관리자, 배치(이전) / 가맹점관리자 /
								내부관리자, 배치(고도화) 총 5개
							</Td>
						</tr>
						<tr>
							<Td colspan="5"></Td>
						</tr>
						<tr>
							<th rowSpan={"7"}>기술스택</th>
							<Td>서버</Td>
							<Td>
								<StackSpan>
									MVC1(내부관리자), SPRING(가맹점관리자),
									SPRINGBOOT(내부관리자)
									<br />
									LINUX(배치), SPRING BATCH(배치)
								</StackSpan>
							</Td>
						</tr>
						<tr>
							<Td>Front</Td>
							<Td>
								<StackSpan>HTML, JQUERY(ajax), JSP</StackSpan>
							</Td>
						</tr>
						<tr>
							<Td>Back</Td>
							<Td>
								<StackSpan>JAVA, IBATIS/MYBATIS</StackSpan>
							</Td>
						</tr>
						<tr>
							<Td>DB</Td>
							<Td>
								<StackSpan>ORACLE</StackSpan>
							</Td>
						</tr>
					</tbody>
				</Table>
			</ContentWrapper>
		</ScrollRevealSlideAnimation>
	);
}

export default Smartro;

const Table = styled.table`
	margin-top: 3rem;
`;

const Td = styled.td`
	width: auto;
	padding: 1rem 1rem 1rem 5rem;
`;

const StackSpan = styled.span`
	font-size: 1.5rem;
	font-family: "Nanum", "Montserrat-bold";
`;
