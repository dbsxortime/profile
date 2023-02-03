import SkillOnOff from "./SkillOnOff"

function Skill({grade}) {
	return (
		<>
			<SkillOnOff set={grade>=1}/>
			<SkillOnOff set={grade>=2}/>
			<SkillOnOff set={grade>=3}/>
		</>
	)
}

export default Skill