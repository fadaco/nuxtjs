import {SERVER_REQUEST} from '../shared/backend';
import {ApiEndpoints} from '../shared/endpoints';


export const state = () => ({
      user: {
		name:"",
		email:"",
		phone_number: "",
		password: ""
	  },
	  userType: null,
	  userError: [],
	  is_auth: false
});

export const getters = {
	getUserError(state) {
		return state.userError;
	}
}

export const mutations = {
	SET_USER_TYPE(state, value) {
		state.userType = value;
	},
	SET_USER_ERROR(state, value) {
		state.userError = [...value]
	}
}

export const actions = {
	async registerUser ({ commit, dispatch }, data) {
		console.log('hhhhhh')
		const response = await SERVER_REQUEST(this, ApiEndpoints.REGISTER, 'post', data);
		console.log(response)
		if (response.message === 'success') {
			await dispatch('loginUser', data);
		} else {
			let errorData = [];
		
			for (let error in response.errors) {
				let data = {
					name: error,
					value: response.errors[error][0]
				}
				let a = await dispatch('validationMessage',   data)
				errorData.push(a)
			}
			commit('SET_USER_ERROR', errorData);
		
		}
    
	  },

	   validationMessage({commit}, data){
		  switch(data.value){
			  case 'validation.required':
		 		  return `${data.name} is required`;
			  case 'validation.unique':
				  return `${data.name} already exist`;
			   default:
				 return `${data.name} is invalid`;
		  }
	  },

	async loginUser ({commit, dispatch}, data) {
		const response = await SERVER_REQUEST(this, ApiEndpoints.LOGIN, 'post', data);
		if(response.message === "success") {
			await this.$axios.setToken(response.data.access_token, 'Bearer');
			await this.$cookies.set('Authorization', response.data.access_token);
			await this.$cookies.set('user', JSON.stringify(response.data.user));
			await response.data.user.type ? commit('SET_USER_TYPE', 'user') : commit('SET_USER_TYPE', 'admin');
			
		} else {
			let errorData = [];
			for (let error in response.errors) {
				let data = {
					name: error,
					value: response.errors[error][0]
				}
				let a = await dispatch('validationMessage',   data)
				errorData.push(a)
			}
			commit('SET_USER_ERROR', errorData);
		}
	},

	
}