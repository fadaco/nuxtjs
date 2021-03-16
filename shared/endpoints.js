export const ApiEndpoints = {
  REGISTER: "user/register",
  LOGIN: "user/login",
  FETCH_BUSINESS: "user/businesses",
  FETCH_ALL_USERS: "admin/all_users",
  FETCH_BUSINESSES: "admin/businesses",
  FETCH_WALLET_TRANSACTIONS: "admin/fetch_wallet_transactions",
  ACTIVATE_AND_DEACTIVATE_BUSINESS: "admin/deactivate_and_activate_business",
  FETCH_USER: "user",
  FETCH_USER_BY_ID: id => `admin/${id}/user`,
  FETCH_BUSINESS_BY_ID: id => `admin/${id}/business`,
  FETCH_WALLET_TRANSACTION_BY_ID: id => `admin/${id}/wallet_transaction`,
  FETCH_WALLET: id => `user/${id}/wallet_balance`,
  FUND_WALLET: "user/fund_wallet",
  CREATE_BUSINESS: "business/create",
  UPDATE_USER_CONFIGURATION: "user/edit_configuration",
  FETCH_BUSINESS_FOR_USER_BY_ID: id => `user/${id}/business_detail`,
  FETCH_BUSINESS_TRANSACTION: businessId =>
    `business-transactions/${businessId}`,
  GENERATE_NEW_KEY: "business/generate/key",
  FETCH_COUNTRY_WITH_PRICE: "countries/all",
  CREATE_CONTACT: "contact"
};
