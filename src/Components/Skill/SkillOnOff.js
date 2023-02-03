import styled from "styled-components"

function SkillOnOff({set}) {
	return (
		<>
			{set?<Div className="on"/>:<Div/>}
		</>
	)
}

export default SkillOnOff

const Div = styled.div`
	display:inline-block;
	margin:0 0.1rem;
	width:0.8rem;
	height:1.4rem;
	border:1px solid #29453C;
	border-radius:2px;
`