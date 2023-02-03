import Skill from "Components/Skill/Skill"

function Test() {
	return (
		<>
			<h1 className='hover-scale'>Developer</h1>
			<h2>About me</h2>
			<h3>Profile</h3>
			<h3 className='active'>Profile</h3>
			<h4>Profile</h4>
			<span>Javascript<Skill grade={'1'}/></span>
			<span>Java<Skill grade={'2'}/></span>
			<span>React.js<Skill grade={'3'}/></span>
		</>
	)
}

export default Test