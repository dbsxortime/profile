import { Link } from "react-router-dom"
import styled from "styled-components"

function Navigator() {
	return (
		<Nav>
			<Link to="/"><Menu>Home</Menu></Link>
			<Link to="/introduce"><Menu>Introduce</Menu></Link>
			<Link to="/test"><Menu>Test</Menu></Link>
		</Nav>
	)
}

export default Navigator

const Nav = styled.nav`
	width:100%;
	position:fixed;
	text-align:center;
`

const Menu = styled.span`
	padding: 0 1em;
`