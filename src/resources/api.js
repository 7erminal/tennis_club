import axios from 'axios'
import cookie from "react-cookies";

class Api {
    async getRegistrationDetails () {
		const response = await axios.get('http://localhost:8000/registrationdetails/')

        return response.data
       
	}

	// get configs
	async getConfigs () {
		const response = await axios.get('http://localhost:8000/get-configs/')

        return response.data
       
	}

	// get stats
	async getGames () {
		const response = await axios.get('http://localhost:8000/get-games')

        return response.data
       
	}

	async getScheduledCoaching () {
		const response = await axios.get('http://localhost:8000/get-coaching-schedules')

        return response.data 
	}

	async getScheduledTraining () {
		const response = await axios.get('http://localhost:8000/get-training-schedules')

        return response.data 
	}

  // add member
	async add_member(params){
		console.log("what is being sent")

		const config = {
			method: 'post',
			url: 'http://localhost:8000/api/registermember/',
			data: params,
			// headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			// }
		}

		const res = await axios(config)

		return await res
	}


	// add group
	async add_group(params){
		console.log("what is being sent")

		const config = {
			method: 'post',
			url: 'http://localhost:8000/api/addgroup/',
			data: params,
			// headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			// }
		}

		const res = await axios(config)

		return await res
	}

	// add court
	async add_court(params){
		console.log("what is being sent")

		const config = {
			method: 'post',
			url: 'http://localhost:8000/api/addcourt/',
			data: params,
			// headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			// }
		}

		const res = await axios(config)

		return await res
	}

	// add match type
	async add_match_type(params){
		console.log("what is being sent")

		const config = {
			method: 'post',
			url: 'http://localhost:8000/api/addmatchtype/',
			data: params,
			// headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			// }
		}

		const res = await axios(config)

		return await res
	}

	// add game type
	async add_game_type(params){
		console.log("what is being sent")

		const config = {
			method: 'post',
			url: 'http://localhost:8000/api/addgametype/',
			data: params,
			// headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			// }
		}

		const res = await axios(config)

		return await res
	}

	// add game type
	async add_coaching_type(params){
		console.log("what is being sent")

		const config = {
			method: 'post',
			url: 'http://localhost:8000/api/addcoachingtype/',
			data: params,
			// headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			// }
		}

		const res = await axios(config)

		return await res
	}

	// add game
	async add_game(params){
		console.log("what is being sent")
		console.log(params)

		const config = {
			method: 'post',
			url: 'http://localhost:8000/api/addgame/',
			data: params,
			// headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			// }
		}

		const res = await axios(config)

		return await res
	}

	// add coaching schedule
	async schedule_coach(params){
		console.log("what is being sent")
		console.log(params)

		const config = {
			method: 'post',
			url: 'http://localhost:8000/api/schedulecoach/',
			data: params,
			// headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			// }
		}

		const res = await axios(config)

		return await res
	}

	// add training schedule
	async schedule_training(params){
		console.log("what is being sent")
		console.log(params)

		const config = {
			method: 'post',
			url: 'http://localhost:8000/api/scheduletraining/',
			data: params,
			// headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			// }
		}

		const res = await axios(config)

		return await res
	}

	// get members
	async getMembers(){
		const response = await axios.get('http://localhost:8000/get-members')

		return response.data
	}
}

export default Api