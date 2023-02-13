import React from 'react'
import styled from 'styled-components'

function Profile() {
	return (
		<>
			<h2>About Me</h2>
			<SubMenu>
				<h3>Profile</h3>
				<h3>IAm</h3>
				<h3>Skills</h3>
				<h3>Career</h3>
			</SubMenu>
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
		</>
	)
}

export default Profile

const SubMenu = styled.div`
	width: 35%;
	display: flex;
	justify-content: space-around;
	margin:3rem 0;
`