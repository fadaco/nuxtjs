import {ApiEndpoints} from '../shared/endpoints';
import {SERVER_REQUEST} from '../shared/backend';


export const state = () => ({
    wallet: {},
    wallet_authorization: {}
})

export const getters = {
    getWallet(state){
        return state.wallet
    },
    getWalletAuthorizationCredential(state){
        return state.wallet_authorization
    }
}

export const mutations = {
    SET_USER_WALLET(state, value) {
        state.wallet = {...value}
    },
    REDIRECT_USER_TO_AUTHORIZATION_PAGE(state, value) {
        state.wallet_authorization = {...value}
    }
}

export const actions = {
    async fetchWallet ({commit}, id) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.FETCH_WALLET(id), 'get');
        commit('SET_USER_WALLET', response.data);
        
    },
    async fundWallet({commit}, data) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.FUND_WALLET, 'post', data);
        commit('REDIRECT_USER_TO_AUTHORIZATION_PAGE', response.data);
    }
}