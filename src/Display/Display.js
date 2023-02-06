import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navigator from "Components/Navigator/Navigator";
import Wrapper from "Components/Wrapper/Wrapper";
import { getMenuObject, menuArray } from "util/nav";
import { useState } from "react";

function Display() {
	const [touchPosition, setTouchPosition] = useState()
	const [animationClassName, setAnimationClassName] = useState('slide-to-bottom')
	const location = useLocation();
	const navigator = useNavigate();

	const touchEnd = (e) => {
		const distanceY = touchPosition.y - e.changedTouches[0].pageY
		if(distanceY<0){
			 // next event
			goNextPage()
		}else{
			// prev event
			goPrevPage()
		}
	}
	
	const handleOnWheel = (e) => {
        if (e.nativeEvent.wheelDelta > 0) {
            // next event
			goNextPage()
		} else {
            // prev event
			goPrevPage()
        }
    }

	const goNextPage = () => {
		setAnimationClassName('slide-to-bottom')
		const menuObj = getMenuObject()
		if(menuObj[location.pathname].idx === 0)return;
		navigator(menuArray[menuObj[location.pathname].idx-1].url)
	}

	const goPrevPage = () => {
		setAnimationClassName('slide-to-top')
		const menuObj = getMenuObject()
		if(menuObj[location.pathname].idx === menuArray.length-1)return;
		navigator(menuArray[menuObj[location.pathname].idx+1].url)
	}

	return (
		<>
			<Navigator />
			<TransitionGroup onWheel={handleOnWheel} 
				onTouchStart={(e) => setTouchPosition({
					x: e.changedTouches[0].pageX, 
					y: e.changedTouches[0].pageY
				})}
				onTouchEnd={touchEnd}
			>
				<CSSTransition key={location.key} timeout={500} classNames={animationClassName}>
				{/* <CSSTransition key={location.key} timeout={500} classNames="fade"> */}
					<Wrapper>
						<Routes location={location}>
							{menuArray.map((menu, idx)=>{
								return <Route path={menu.url} element={menu.page} exact={menu.exact} key={idx}/>
							})}
						</Routes>
					</Wrapper>
				</CSSTransition>
			</TransitionGroup>
		</>
	);
}

export default Display;