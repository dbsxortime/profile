import ScrollRevealSlideAnimation from "Components/ScrollRevealSlideAnimation"

function Career() {
	return (
		<ScrollRevealSlideAnimation direction={'left'} time={'500ms'}>
			<table>
				<tbody>
					<tr>
						<th rowSpan='4'>I worked</th>
						<th>1 Year</th>
						<td colSpan='2'></td>
					</tr>
					<tr>
						<th>Explorer</th>
						<td colSpan='2'>새로운 것들을 찾아다닙니다.</td>
					</tr>
				</tbody>
			</table>
		</ScrollRevealSlideAnimation>
	)
}

export default Career