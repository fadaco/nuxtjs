import {ApiEndpoints} from '../shared/endpoints';
import {SERVER_REQUEST} from '../shared/backend';

export const state = () => ({
     contact: {}
});

export const getters = {
    getContact(state) {
        return state.contact;
    }
}

export const mutations = {
    SET_CONTACT_SUCCESS_MESSAGE(state, data) {
        state.contact = {...data}
    }
}

export const actions = {
    async submitContact({commit}, data) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.CREATE_CONTACT, 'post', data);
        commit('SET_CONTACT_SUCCESS_MESSAGE', response)
    }
}