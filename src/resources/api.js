import axios from 'axios'
import cookie from "react-cookies";

class Api {
    async getRegistrationDetails () {
		const response = await axios.get('http://localhost:8000/registrationdetails/')

        return response.data
       
	}

  // add member
	async add_member(params){
		console.log("what is being sent")

		const config = {
			method: 'post',
			url: 'http://localhost:8000/api/registeruser/',
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
}

export default Api