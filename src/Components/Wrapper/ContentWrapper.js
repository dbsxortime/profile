import styled from "styled-components"

function ContentWrapper({children}) {
	
	return (
		<Div>{children}</Div>
	)
}

export default ContentWrapper

const Div = styled.div`
	width:100%;
	
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction: column;
	overflow:hidden;
`