<template>
  <v-col style="background: #f7f7f7" cols="12" sm="12" md="10">
    <v-row v-if="dialog" justify="center">
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline"> Message </v-card-title>
          <v-card-text>{{ activeMessage }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row
      v-if="$fetchState.pending"
      class="form-content text-center calculator-card loading"
    >
      <p>Fetching your Transactions . . .</p>
    </v-row>

    <v-row
      v-else-if="$fetchState.error"
      class="form-content text-center loading"
    >
      <p>An error occurred :</p>
    </v-row>

    <div v-else>
      <div class="d-col-2">
        <div class="transaction-div">
          <div v-show="IncomingTransac">
            <v-tabs show-arrows color="#6338B2" background-color="transparent">
              <v-tab class="sanitize">Messages</v-tab>
              <v-tab class="sanitize">OTPs</v-tab>

              <v-tab-item style="border-radius: 20px">
                <v-card flat>
                  <div class="table-div" id="scroll">
                    <table>
                      <thead>
                        <tr>
                          <th v-for="header in headers" :key="header.id">
                            {{ header }}
                          </th>
                        </tr>
                      </thead>

                      <tbody
                        v-if="nonOtpTransactions && nonOtpTransactions.length"
                      >
                        <tr
                          v-for="(item, index) in nonOtpTransactions"
                          :key="index"
                        >
                          <td>{{ index + 1 }}</td>

                          <td>{{ item.recepient_phone_number }}</td>
                          <td>{{ item.recepient_email }}</td>

                          <td style="color: #2bc448">
                            <v-icon v-if="item.email_status" color="green"
                              >mdi-check-circle</v-icon
                            >
                            <v-icon v-else color="red">mdi-close-box</v-icon>
                          </td>
                          <td style="color: #2bc448">
                            <v-icon v-if="item.sms_status" color="green"
                              >mdi-check-circle</v-icon
                            >
                            <v-icon v-else color="red">mdi-close-box</v-icon>
                          </td>
                          <td @click="openDialog(item.message)">
                            Preview message
                          </td>
                          <td>{{ item.transaction_ref }}</td>
                          <td>
                            <v-menu offset-y>
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  color="#6338B2"
                                >
                                  mdi-dots-horizontal
                                </v-icon>
                              </template>
                              <v-list>
                                <v-list-item>
                                  <v-list-item-title>Delete</v-list-item-title>
                                </v-list-item>
                              </v-list>
                            </v-menu>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </v-card>
              </v-tab-item>

              <!-- otps -->
              <v-tab-item style="border-radius: 20px">
                <v-card flat>
                  <div class="table-div" id="scroll">
                    <table>
                      <thead>
                        <tr>
                          <th v-for="header in headers" :key="header.id">
                            {{ header }}
                          </th>
                        </tr>
                      </thead>

                      <tbody v-if="otpTransactions && otpTransactions.length">
                        <tr
                          v-for="(item, index) in otpTransactions"
                          :key="index"
                        >
                          <td>{{ index + 1 }}</td>

                          <td>{{ item.recepient_phone_number }}</td>
                          <td>{{ item.recepient_email }}</td>

                          <td style="color: #2bc448">
                            <v-icon v-if="item.email_status" color="green"
                              >mdi-check-circle</v-icon
                            >
                            <v-icon v-else color="red">mdi-close-box</v-icon>
                          </td>
                          <td style="color: #2bc448">
                            <v-icon v-if="item.sms_status" color="green"
                              >mdi-check-circle</v-icon
                            >
                            <v-icon v-else color="red">mdi-close-box</v-icon>
                          </td>
                          <td @click="openDialog(item.message)">
                            Preview message
                          </td>
                          <td>{{ item.transaction_ref }}</td>
                          <td>
                            <v-menu offset-y>
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  color="#6338B2"
                                >
                                  mdi-dots-horizontal
                                </v-icon>
                              </template>
                              <v-list>
                                <v-list-item>
                                  <v-list-item-title>Delete</v-list-item-title>
                                </v-list-item>
                              </v-list>
                            </v-menu>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </div>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
import { GET_DATA } from "../../shared/methods";
import { ApiEndpoints } from "../../shared/endpoints";
import { SERVER_REQUEST } from "../../shared/backend";
import { TRANSACTIONHEADER } from "../../shared/constants";

export default {
  name: "Transactions",
  middleware: "auth",
  layout: "user",
  fetchOnServer: false,

  components: {},

  data() {
    return {
      transactionType: true,
      IncomingTransac: true,
      businessId: "",
      activeMessage: "",
      dialog: false,
    };
  },

  methods: {
    openDialog(message) {
      this.dialog = true;
      this.activeMessage = message;
    },
  },

  async fetch() {
    this.businessId = GET_DATA("app_id");
    let transactions = await SERVER_REQUEST(
      this,
      ApiEndpoints.FETCH_BUSINESS_TRANSACTION(this.businessId),
      "get"
    );

    return this.$store.commit(
      "smsTransactions/setBusinessTransaction",
      transactions.data
    );
  },

  computed: {
    rawData() {
      return this.$store.state.smsTransactions.transactions
        ? this.$store.state.smsTransactions.transactions
        : false;
    },

    transactions() {
      return this.rawData ? this.rawData : false;
    },

    headers() {
      return TRANSACTIONHEADER;
    },

    otpTransactions() {
      if (!this.transactions) return [];
      return this.transactions.filter((item) => {
        return item.otp != "";
      });
    },

    nonOtpTransactions() {
      if (!this.transactions) return [];
      return this.transactions.filter((item) => {
        return item.otp == "";
      });
    },
  },
};
</script>


<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
.loading {
  justify-content: center;
  display: flex;
  margin-top: 10vh;
}
a {
  text-decoration: none;
}
.d-col-2 {
  padding: 50px 70px;
  background: white;
  height: 88vh;
  border-radius: 30px 0 0 0 !important;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /*Hide scrollbar for mozilla */
  & {
    overflow: -moz-scrollbars-none;
  }

  /* Hide scrollbar for IE and Edge */
  & {
    -ms-overflow-style: none;
  }
}
.wallet-div {
  margin-bottom: 50px;
}
.wallet-header {
  font-size: 18px;
  color: #2c125c8e;
}
.wallet-value {
  background: #ece9f2;
  color: #2c125c;
  text-align: center;
  width: 20%;
  border-radius: 10px;
  height: 100px;
  line-height: 100px;
  margin-top: 20px;
  font-size: 40px;
}

.transaction-div {
  margin-bottom: 50px;
}
.transaction {
  border-radius: 10px;
  padding: 25px;
  height: 180px;
  transition: all 0.2s;
  cursor: pointer;
}
.transaction:hover {
  box-shadow: 0 0px 17px -5px rgba(0, 0, 0, 0.51);
}

.transaction-col {
  background: #cc6ac9;
  color: #ffffff;
}
.transaction-col-2 {
  background: #610f7f;
  color: #ffffff;
}
.transaction-header {
  font-size: 18px;
  color: #2c125c8e;
}
.transaction-col-2-s2 {
  font-size: 40px;
}

.floating-spiral {
  height: 270px;
  position: absolute;
  right: -150px;
  top: 35%;
}
.table-1 {
  background: white;
  border-radius: 10px;
  border: 1px solid rgb(205, 205, 205);
  padding: 30px;
  height: 300px;
}
.table-2 {
  background: white;
  border-radius: 10px;
  border: 1px solid rgb(205, 205, 205);
  padding: 30px;
  height: 300px;
}

#scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
  height: 5px;
}

#scroll::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
  height: 5px;
}

#scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #6338b2;
  height: 5px;
}
.table-div {
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;
  padding: 20px 0;
}
table {
  min-width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  border-radius: 10px;
  background: white;
}

/* Zebra striping */
/* tr:nth-of-type(odd) {
	background: #eee;
	} */

th {
  background: #f8f8f8;
  color: #211c3c;
  padding: 15px;
  font-size: 11px;
  font-weight: 400;
  text-align: left;
}
td {
  color: rgb(54, 54, 54);
  border-bottom: 0.5px solid #efefef;
  padding: 20px;
  transition: all 0.2s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  text-align: left;
}
tr {
  background: transparent;
  cursor: pointer;
}

@media (max-width: 991px) {
}
@media (max-width: 767px) {
}
@media (max-width: 479px) {
  .d-col-2 {
    padding: 50px 20px;
    background: white;
    height: 90vh;
    border-radius: 30px 30px 0 0 !important;
    overflow-y: scroll;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }

    /*Hide scrollbar for mozilla */
    & {
      overflow: -moz-scrollbars-none;
    }

    /* Hide scrollbar for IE and Edge */
    & {
      -ms-overflow-style: none;
    }
  }
  .wallet-div {
    margin-bottom: 50px;
  }
  .wallet-header {
    font-size: 18px;
    color: #2c125c8e;
  }
  .wallet-value {
    background: #ece9f2;
    color: #2c125c;
    text-align: center;
    width: 100%;
    border-radius: 10px;
    height: 100px;
    line-height: 100px;
    margin-top: 20px;
    font-size: 40px;
  }

  .transaction-div {
    margin-bottom: 50px;
  }
  .transaction {
    border-radius: 10px;
    padding: 25px;
    height: 180px;
  }
  .transaction-col {
    background: #cc6ac9;
    color: #ffffff;
  }
  .transaction-col-2 {
    background: #610f7f;
    color: #ffffff;
  }

  .transaction-header {
    font-size: 20px;
    color: #2c125c8e;
  }
  .transaction-col-2-s2 {
    font-size: 40px;
  }

  .floating-spiral {
    height: 270px;
    position: absolute;
    right: -150px;
    top: 35%;
  }
  .table-1 {
    background: white;
    border-radius: 10px;
    border: 1px solid rgb(205, 205, 205);
    padding: 30px;
    height: 300px;
  }
  .table-2 {
    background: white;
    border-radius: 10px;
    border: 1px solid rgb(205, 205, 205);
    padding: 30px;
    height: 300px;
  }
  .form-content {
    margin: 10px 0;
    height: 88vh;
    align-items: center;
    background: #a88fd60a;
  }

  .calculator-card {
    display: flex;
    padding: 20px 0 0 0;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
