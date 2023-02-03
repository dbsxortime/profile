import SkillOnOff from "./SkillOnOff"

function Skill({grade}) {
	const skillArr = []
	for(let i=1; i<=3; i++){
		skillArr.push(grade>=i)
	}
	return (
		<>
			{skillArr.map((data, idx)=>{
				return <SkillOnOff key={idx} set={data}/>
			})}
		</>
	)
}

export default Skill