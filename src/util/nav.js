import About from "Pages/About/About"
import Career from "Pages/About/Career"
import IAm from "Pages/About/IAm"
import Profile from "Pages/About/Profile"
import Skills from "Pages/About/Skills"
import Main from "Pages/Main/Main"
import Test from "Pages/Test/Test"

export const menuArray = [
	{
		url:'/',
		page:<Main />,
		name:'Main',
		exact:true,
	},
	{
		url:'/about',
		page:<About />,
		name:'About',
		child:[{
				name:'Profile',
				url:'profile',
				table:<Profile />
			},
			{
				name:'I AM',
				url:'iam',
				table:<IAm />
			},
			{
				name:'Skills',
				url:'skills',
				table:<Skills />
			},
			{
				name:'Career',
				url:'career',
				table:<Career />
			},
		]
		
	},
	{
		url:'/test',
		page:<Test />,
		name:'Test',
	},
]

export const getMenuObject = () => {
	let obj = {}
	menuArray.forEach((element, index) => {
		obj[menuArray[index].url] = element
		obj[menuArray[index].url].idx = index
	})
	return obj
}

//child 메뉴 전체가 요소로 안들어가는 버전