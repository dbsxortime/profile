import { Link } from "react-router-dom"
import styled from "styled-components"

function Navigator() {
	return (
		<>
			<Nav>
				<Link to="/"><Menu>Home</Menu></Link>
				<Link to="/about"><Menu>About</Menu></Link>
				<Link to="/test"><Menu>Test</Menu></Link>
			</Nav>
			<Header>FrontBack</Header>
			<Footer>Park Yun Taek</Footer>
		</>
	)
}

export default Navigator

// ㆍ 한글 아래아 특수문자

const Nav = styled.nav`
	width:100%;
	display:flex;
	justify-content:center;
	align-items:center;
	position:fixed;
	top:6rem;
	z-index:9;
`

// const Nav = styled.nav`
// 	height:100%;
// 	position:fixed;
// 	left:3rem;
// 	display:flex;
// 	justify-content:center;
// 	align-items:center;
// 	flex-direction: column;
// `

const Menu = styled.span`
	display:block;
	margin: 0.5rem 1rem;
	width: 10rem;

	&::before {
		content: "ㆍ";
	}
`

const Header = styled.span`
	font-size:2.5rem;
	position:fixed;
	top:3rem;
	text-align:center;
	width:100%;
`

const Footer = styled.span`
	font-size:2.5rem;
	position:fixed;
	bottom:4rem;
	text-align:center;
	width:100%;
`