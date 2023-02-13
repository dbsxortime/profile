import ScrollRevealSlideAnimation from "Components/ScrollRevealSlideAnimation"
import Skill from "Components/Skill/Skill"
import styled from "styled-components"

function Skills() {
	return (
		<ScrollRevealSlideAnimation direction={'left'} time={'500ms'}>
			<table>
				<tbody>
					<tr>
						<th rowSpan='4'>I can do</th>
						<th>Front</th>
						<Td>
							<span>Javascript</span>
							<span>HTML/JSP/CSS</span>
							<span>React.js</span>
							<span>Vue.js</span>
						</Td>
						<SkillTd>
							<span><Skill grade={'2'}/></span>
							<span><Skill grade={'2'}/></span>
							<span><Skill grade={'2'}/></span>
							<span><Skill grade={'1'}/></span>
						</SkillTd>
					</tr>
					<tr>
						<th>Back</th>
						<Td>
							<span>JAVA</span>
							<span>Spring</span>
							<span>Node.js</span>
							<span>Python</span>
						</Td>
						<SkillTd>
							<span><Skill grade={'2'}/></span>
							<span><Skill grade={'2'}/></span>
							<span><Skill grade={'2'}/></span>
							<span><Skill grade={'1'}/></span>
						</SkillTd>
					</tr>
					<tr>
						<th>Others</th>
						<Td>
							<span>RDBMS</span>
							<span>NoSql</span>
							<span>Github/SVN</span>
						</Td>
						<SkillTd>
							<span><Skill grade={'2'}/></span>
							<span><Skill grade={'2'}/></span>
							<span><Skill grade={'1'}/></span>
						</SkillTd>
					</tr>
				</tbody>
			</table>
		</ScrollRevealSlideAnimation>
	)
}

export default Skills

const Td = styled.td`
	width: 10%;
`
const SkillTd = styled.td`
	width: 30%;
`