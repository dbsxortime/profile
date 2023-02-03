import Wrapper from "Components/Wrapper/Wrapper";
import Introduce from "Pages/About/About";
import Main from "Pages/Main/Main";
import Test from "Pages/Test/Test";
import { Route, Routes, useLocation } from "react-router-dom";

function Menu() {
	const location = useLocation();

	return (
		<Wrapper>
			<Routes location={location}>
				<Route exact path='/' element={<Main />} />
				<Route exact path='/introduce' element={<Introduce />} />
				<Route exact path='/test' element={<Test />} />
			</Routes>
		</Wrapper>
	)
}

export default Menu