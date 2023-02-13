import { useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"
import { menuArray } from "util/nav"

function Navigator({ page }) {
	const [type, setType] = useState('left');
	
	const onNavStyleHandler = ()=> {
		setType((prev)=>{
			return prev !== 'top' ? 'top' : 'left'
		})
	}

	return (
		<>
			<Nav className={'menu-'+type}>
				{menuArray.map((menu, idx)=>{
					return (
						<div key={idx}>
							<Link to={menu.url}>
								<Menu className={page === menu.url ? 'active' : null}>{menu.name}</Menu>
							</Link>
						</div>
					)
				})}
			<button onClick={onNavStyleHandler}>Change nav style</button>
			</Nav>
			<Header>FrontBack</Header>
			<Footer>Park Yun Taek</Footer>
		</>
	)
}

export default Navigator

// ㆍ 한글 아래아 특수문자

const Nav = styled.nav`
	position:fixed;
	display:flex;
	justify-content:center;
	align-items:center;
	z-index:9;
`

const Menu = styled.span`
	display:block;
	margin: 0.5rem 1rem;
	width: 15rem;

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