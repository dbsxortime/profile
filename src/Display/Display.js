import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navigator from "Components/Navigator/Navigator";
import Wrapper from "Components/Wrapper/Wrapper";
import { menuArray, getMenuObject } from "util/nav";
import { useState } from "react";
import Main from "Pages/Main/Main";
import About from "Pages/About/About";
import Test from "Pages/Test/Test";

function Display() {
	const location = useLocation()
	const navigator = useNavigate()
	const [touchPosition, setTouchPosition] = useState()
	const [animationClassName, setAnimationClassName] = useState('slide-to-bottom')
	const menuObj = getMenuObject();
	
	const touchEnd = (e) => {
		if(touchPosition.y - e.changedTouches[0].pageY > 100){
			 // next event
			checkNextPage()
		}else if(touchPosition.y - e.changedTouches[0].pageY < -100){
			// prev event
			checkPrevPage()
		}
	}
	
	const handleOnWheel = (e) => {
        if (e.nativeEvent.wheelDelta < 0) {
            // next event
			checkNextPage()
		} else {
            // prev event
			checkPrevPage()
        }
    }

	const goPrevPage = () => {
		setAnimationClassName('slide-to-bottom')
		navigator(menuArray[menuObj[location.pathname].idx-1].url)
	}

	const goNextPage = () => {
		setAnimationClassName('slide-to-top')
		navigator(menuArray[menuObj[location.pathname].idx+1].url)
	}

	const checkPrevPage = () => {
		if(menuObj[location.pathname].idx === 0)return;
		goPrevPage();
	}

	const checkNextPage = () => {
		if(menuObj[location.pathname].idx === menuArray.length-1)return;
		goNextPage();
	}
	
	return (
		<>
			<Navigator page={location.pathname}/>
			<TransitionGroup onWheel={handleOnWheel} 
				onTouchStart={(e) => setTouchPosition({
					x: e.changedTouches[0].pageX, 
					y: e.changedTouches[0].pageY
				})}
				onTouchEnd={touchEnd}
			>
				<CSSTransition key={location.key} timeout={500} classNames={animationClassName}>
					<Wrapper>
						<Routes location={location}>
							<Route path={'/'} element={<Main goNextPage={goNextPage} goPrevPage={goPrevPage}/>} exact/>
							<Route path={'/about'} element={<About goNextPage={goNextPage} goPrevPage={goPrevPage}/>} exact/>
							<Route path={'/test'} element={<Test goNextPage={goNextPage} goPrevPage={goPrevPage}/>} exact/>

							{/* {menuArray.map((menu, idx)=>{
								return (
									<Route path={menu.url} element={menu.page} exact={menu.exact} key={idx}/>
								)
							})} */}
						</Routes>
					</Wrapper>
				</CSSTransition>
			</TransitionGroup>
		</>
	);
}

export default Display;