import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navigator from "Components/Navigator/Navigator";
import Wrapper from "Components/Wrapper/Wrapper";
import About from "Pages/About/About";
import Main from "Pages/Main/Main";
import Test from "Pages/Test/Test";


function Display() {
	const location = useLocation();

	// const handleOnWheel = (e) => {
    //     if (e.nativeEvent.wheelDelta > 0) {
    //         // scroll up event
    //         console.log('scroll up');
	// 	} else {
    //         // scroll down event 
    //         console.log('scroll down');
    //     }
    // }
	
	return (
		<>
			<Navigator />
			<TransitionGroup>
				<CSSTransition key={location.key} timeout={500} classNames="slide-to-left">
				{/* <CSSTransition key={location.key} timeout={4000} classNames="fade"> */}
					<Wrapper>
						<Routes location={location}>
							<Route exact path='/' element={<Main />} />
							<Route path='/about' element={<About />} />
							<Route path='/test' element={<Test />} />
						</Routes>
					</Wrapper>
				</CSSTransition>
			</TransitionGroup>
		</>
	);
}

export default Display;