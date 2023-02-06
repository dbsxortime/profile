const { default: About } = require("Pages/About/About")
const { default: Main } = require("Pages/Main/Main")
const { default: Test } = require("Pages/Test/Test")
export const menuArray = [
	{
		url:'/',
		page:<Main />,
		name:'Main',
		idx:0,
		exact:true,
	},
	{
		url:'/about',
		page:<About />,
		name:'About',
		idx:1,
	},
	{
		url:'/test',
		page:<Test />,
		name:'Test',
		idx:2,
	},
]

export const getMenuObject = () => {
	let obj = {}
	menuArray.forEach((element, index) => {
		obj[menuArray[index].url] = element;
	})
	return obj
}

// export const menuObject = {
// 	main:{
// 		url:'/',
// 		page:<Main />,
// 		exact:true,
// 	},
// 	about:{
// 		url:'/about',
// 		page:<About />,
// 		name:'About'
// 	},
// 	test:{
// 		url:'/test',
// 		page:<Test />,
// 		name:'Test'
// 	},
// }