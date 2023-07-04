import ScrollRevealSlideAnimation from "Components/ScrollRevealSlideAnimation"

function IAm() {
	return (
		<ScrollRevealSlideAnimation direction={'left'} time={'500ms'}>
			<table>
				<tbody>
					<tr>
						<th rowSpan='4'>I AM</th>
						<th>Developer</th>
						<td colSpan='2'>논리적인 시각으로 바라보고 문제를 해결합니다.</td>
					</tr>
					<tr>
						<th>Explorer</th>
						<td colSpan='2'>새로운 것들을 찾아다닙니다.</td>
					</tr>
					<tr>
						<th>Manager</th>
						<td colSpan='2'>분석하고 설계하고 개선합니다.</td>
					</tr>
					<tr>
						<th>Challenger</th>
						<td colSpan='2'>항상 도전하고 시도합니다.</td>
					</tr>
				</tbody>
			</table>
		</ScrollRevealSlideAnimation>
	)
}

export default IAm