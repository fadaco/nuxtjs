import {ApiEndpoints} from '../shared/endpoints';
import {SERVER_REQUEST} from '../shared/backend';
import {GET_DATA} from '../shared/methods';
import Cookies from 'js-cookie';


export const state = () => ({
    authenticated: false,
    businesses: [],
    business_response: {},
    businessError: [],
    business_detail: {},
    business_id: '',
    user: {}
});

export const getters = {
    getBusinesses(state){
       return state.businesses;
    },
    getBusinessError(state){
        return state.businessError;
    },
    getBusinessDetail(state) {
        return state.business_detail;
    },
    getBusinessId(state) {
        return state.business_id;
    },
    getUser(state) {
        return state.user;
    }
}

export const mutations = {
    SET_AUTH(state, value) {
        state.authenticated = value;
    },
    SET_BUSINESSES(state, data) {
        state.businesses = [...data];
    },
    CREATE_BUSINESS(state, data) {
        state.business_response = {...data}
    },
    SET_BUSINESS_ERROR(state, data) {
        state.businessError = [...data]
    },
    SET_BUSINESS_DETAIL(state, data) {
        state.business_detail = {...data}
    },
    SET_USER(state, data) {
        state.user = {...data}
    }
}

export const actions = {
    async fetchBusinesses ({commit}) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.FETCH_BUSINESS, 'get');
        if(response.message === 'success') {
            commit('SET_AUTH', true);
            commit('SET_BUSINESSES', response.data);
        }
    },
    async fetchUser({commit}) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.FETCH_USER, 'get');
        console.log(response);
        if (response.message === 'success') {
            commit('SET_USER', response.data);
        }
    },
    async generateNewKey({commit, dispatch}, data) {
        console.log(data);
        const response = await SERVER_REQUEST(this, ApiEndpoints.GENERATE_NEW_KEY, 'post', data);
        console.log(response);
        if(response.message === 'success') {
            await dispatch('fetchBusinessForUserById', data.business_id);
        }
    },
    async saveUser({commit}, data) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.FETCH_USER, 'post', data);
        console.log(response);
    },
    async updateBusiness({commit}, data) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.UPDATE_USER_CONFIGURATION, 'post', data);
        console.log(response);
    },
    async fetchBusinessForUserById({commit}, id) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.FETCH_BUSINESS_FOR_USER_BY_ID(id), 'get');
        if(response.message === 'success') {
        commit('SET_BUSINESS_DETAIL', response.data);
        }
    },
    async createBusiness({commit, dispatch}, data) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.CREATE_BUSINESS, 'post', data);
        if (response.message === 'success') {
        commit('CREATE_BUSINESS', response);
        } else {
            let errorData = [];
            for (let error in response.errors) {
				let data = {
					name: error,
					value: response.errors[error][0]
                }
                let a =  await dispatch('validationMessages', data)
				errorData.push(a)
            }
            commit('SET_BUSINESS_ERROR', errorData)
        }
    },
    validationMessages({commit}, data){
        switch(data.value){
            case 'validation.required':
                 return `${data.name} is required`;
            case 'validation.unique':
                return `${data.name} already exist`;
             default:
               return `${data.name} is invalid`;
        }
    },
    
}