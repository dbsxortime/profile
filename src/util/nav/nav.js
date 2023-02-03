const { default: Introduce } = require("Pages/Introduce/Introduce")
const { default: Main } = require("Pages/Main/Main")
const { default: Test } = require("Pages/Test/Test")

export const menuArray = [
	{
		url:'/',
		page:<Main />
	},
	{
		url:'/Introduce',
		page:<Introduce />
	},
	{
		url:'/test',
		page:<Test />
	},
]