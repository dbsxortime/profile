import { Route, Routes, useLocation } from "react-router-dom";
import Navigator from "Components/Navigator/Navigator";
import Wrapper from "Components/Wrapper/Wrapper";
import About from "Pages/About/About";
import Main from "Pages/Main/Main";
import Test from "Pages/Test/Test";

function Display() {
	const location = useLocation();
	// const navigate = useNavigate();

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
			<Wrapper>
				<Routes location={location}>
					<Route exact path='/' element={<Main />} />
					<Route exact path='/about' element={<About />} />
					<Route exact path='/test' element={<Test />} />
				</Routes>
			</Wrapper>
		</>
	);
}

export default Display;