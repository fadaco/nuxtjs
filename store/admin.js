import {SERVER_REQUEST} from '../shared/backend';
import {ApiEndpoints} from '../shared/endpoints';


export const state = () => ({
   users: {},
   user: {},
   businesses: {},
   business: {},
   wallet_transactions: {},
   wallet_transaction: {}
});


export const mutations = {
    SET_USERS(state, data) {
     state.users = {...data}
    },
    SET_USER(state, data){
      state.user = {...data}
    },
    SET_BUSINESSES(state, data) {
        state.businesses = {...data}
    },
    SET_BUSINESS(state, data) {
        state.business = {...data}
    },
    SET_WALLET_TRANSACTIONS(state, data) {
        state.wallet_transactions = {...data}
    },
    SET_WALLET_TRANSACTION(state, data) {
        state.wallet_transaction = {...data}
    }
}

export const actions = {
    async fetchUsers({commit}) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.FETCH_ALL_USERS, 'get');
        if (response.message === 'success') {
            commit('SET_USERS', response.data);
        }
    },
    async fetchUserById({commit}, id) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.FETCH_USER_BY_ID(id), 'get');
        if (response.message === 'success') {
            commit('SET_USER', response.data);
        }
    },
    async fetchBusinesses({commit}) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.FETCH_BUSINESSES, 'get');
        if (response.message === 'success') {
            commit('SET_BUSINESSES', response.data);
        }
    },
    async fetchBusinessById({commit}, id){
        const response = await SERVER_REQUEST(this, ApiEndpoints.FETCH_BUSINESS_BY_ID(id), 'get');
        if (response.message === 'success') {
            commit('SET_BUSINESS', response.data);
        }
    },
    async fetchWalletTransactions({commit}) {
        const response = await SERVER_REQUEST(this, ApiEndpoints.FETCH_WALLET_TRANSACTIONS, 'get');
        if (response.message === 'success') {
            commit('SET_WALLET_TRANSACTIONS', response.data);
        }
    },
    async fetchWalletTransactionById({commit}, id){
        const response = await SERVER_REQUEST(this, ApiEndpoints.FETCH_WALLET_TRANSACTION_BY_ID(id), 'get');
        if (response.message === 'success') {
            commit('SET_WALLET_TRANSACTION', response.data);
        }
    }
}