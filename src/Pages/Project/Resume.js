import ScrollRevealSlideAnimation from 'Components/ScrollRevealSlideAnimation'
import ContentWrapper from 'Components/Wrapper/ContentWrapper'
import React from 'react'

function Resume() {
	return (
		<ScrollRevealSlideAnimation direction={'left'} time={'500ms'}>
			<ContentWrapper>
				<h4>Resume Project</h4>
			</ContentWrapper>
		</ScrollRevealSlideAnimation>
	)
}

export default Resume