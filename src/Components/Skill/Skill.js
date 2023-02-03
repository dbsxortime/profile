import SkillOnOff from "./SkillOnOff"

function Skill({grade}) {
	return (
		<>
			<SkillOnOff set={true}/>
			<SkillOnOff set={true}/>
			<SkillOnOff set={false}/>
		</>
	)
}

export default Skill