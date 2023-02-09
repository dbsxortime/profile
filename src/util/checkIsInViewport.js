export const checkIsInViewport = (element) => {
	if(!element || !window){
		return false;
	}

	const {
		top: elementTop,
		bottom:elementBottom,
	} = element.getBoundingClientRect()
	
	return elementBottom > 0 && elementTop <= window.innerHeight
}