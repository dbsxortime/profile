import ScrollRevealSlideAnimation from "Components/ScrollRevealSlideAnimation"

function Profile() {
	return (
		<ScrollRevealSlideAnimation direction={'left'} time={'500ms'}>
			<table>
				<tbody>
					<tr>
						<th rowSpan='4'>My</th>
						<th>Name</th>
						<td colSpan='2'>박윤택 / Park Yun Taek</td>
					</tr>
					<tr>
						<th>Birth</th>
						<td colSpan='2'>1996.05.28</td>
					</tr>
					<tr>
						<th>Phone</th>
						<td colSpan='2'>010-8998-0372</td>
					</tr>
					<tr>
						<th>E-mail</th>
						<td colSpan='2'>dbsxortime@naver.com</td>
					</tr>
				</tbody>
			</table>
		</ScrollRevealSlideAnimation>
	)
}

export default Profile