import styled from "styled-components"

function Wrapper({children}) {
	
	return (
		<Div>{children}</Div>
	)
}

export default Wrapper


const Div = styled.div`
	width:100%;
	height:100%;
	position:absolute;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction: column;
	overflow:hidden;
`