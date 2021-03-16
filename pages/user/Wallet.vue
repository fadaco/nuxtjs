<template>
    <!-- <div> -->
        
         <!-- <div v-show="fundModal" class="edit-bg">
        <div class="edit-div">
            <v-icon @click="fundModal = false" class="form-close" style="font-size:25px" color="black">mdi-close</v-icon>
            <br><br>
 <div class="form-header">How much do you want to fund your wallet with?</div>
<br>
    <v-text-field v-model="amount" color="#180A35" label="Amount" placeholder="N8000" outlined></v-text-field>
    <br>
    <p class="error">{{message}}</p>
  <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        large
        depressed
        dark
        block
        @click="fundWallet"
        >
       Proceed
      </v-btn>
        </div>
    </div> -->


 

        <!-- <app-header></app-header>
    <v-row class = "d-row" no-gutters>
        <v-col class="hidden-sm-and-down d-col-1" cols="12" sm="12" md="2">
        <app-leftmenu></app-leftmenu>
        </v-col> -->
        
         <v-col style="background:#F7F7F7" cols="12" sm="12" md="10">

            <div class="d-col-2">

                 <v-dialog  v-model="dialog" width="500">
                     <div class="edit-div">
                         <v-icon @click="dialog = false" class="form-close" style="font-size:25px" color="black">mdi-close</v-icon>
                            <br><br>
                        <div class="form-header">How much do you want to fund your wallet with?</div>
                            <br>
                        <v-text-field v-model="amount" color="#180A35" label="Amount" placeholder="N8000" outlined></v-text-field>
                            <br>
                         <p class="error">{{message}}</p>
                            <v-btn
                                class="sanitize banner-btn"
                                color="#FAA722"
                                large
                                depressed
                                dark
                                block
                                @click="fundWallet"
                                >
                            Proceed
                            </v-btn>
                    </div>
                 </v-dialog> 

                
    
                <v-row v-show="walletView">
                    <v-col cols="12" sm="12" md="6">
                         <v-row>
                             <v-col cols="12" sm="12" md="8">
                                  <div class="wallet-card">
                                    
                                      <div class="wallet-header">WALLET BALANCE</div>
                                       <div class="wallet-sub" v-if="getWallet.wallet">N{{getWallet.wallet.balance + '.00'}}</div>
                                       <img  class="wallet-img" src="../.././assets/walletcard.svg" alt=""> 
                                  </div>
                             </v-col>
                              <v-col cols="12" sm="12" md="4">
                                       <div style="cursor:pointer" @click="dialog = true" class="fund-card">
                                           <v-icon color="white">mdi-plus-circle-outline</v-icon>
                                           <br>
                                                Fund Wallet
                                       </div>
                             </v-col>
                         </v-row>

                         <v-divider></v-divider>

          <div class="table-div" id="scroll" v-if="getWallet.wallet"> 
                     <table>
					<thead>
						<tr>
							Recent Transactions
						</tr>
					</thead>

					<tbody>
						<tr  v-for="(item,index) in getWallet.wallet.wallet_transactions" :key="index" >
							<td>
                         <v-icon color="#61fa64" v-if="item.verify === 1">mdi-send-circle</v-icon>
                          <v-icon color="#fa4d4d" v-else>mdi-send-circle</v-icon>
                         <div style="margin-left:5px;display:inline-block">{{item.reference}}</div> <div style="margin-left:30px;font-size:12px;">{{item.verify === 1 ? 'Successful' : 'Pending'}}</div></td>
							<td :style="{color: item.verify === 1 ? '#61fa64' : '#fa4d4d'}">N{{item.amount}}</td>
						</tr>
                
					</tbody>
				</table>
                     </div>

                    </v-col>
                    <v-col cols="12" sm="12" md="6" style="border-left:1px solid #f0f0f0">
                      <v-tabs show-arrows  color="#6338B2" background-color="transparent">
    <v-tab class="sanitize">Cards</v-tab>
    <v-tab-item>
        <v-card style = "padding:20px;" flat>
            <br>
              <div class="card-card"> 
                                      <div class="card-header">**** **** **** 5674</div>
                                      <br>
                                      <v-row>
                                          <v-col cols="6"> 
                                              <div style="color:white;font-size:8px"> 
                                               CARD HOLDER
                                               <br>
                                               Kola Binary
                                              </div>
                                              </v-col>
                                                <v-col cols="6"> 
                                              <div style="color:white;font-size:8px"> 
                                               EXPIRES
                                               <br>
                                               09/22
                                              </div>
                                              </v-col>
                                      </v-row>
                                       <img  class="card-img" src="../.././assets/mastercard.svg" alt=""> 
              </div>
              <br>
        </v-card>
    </v-tab-item>
                      </v-tabs>
                    </v-col>
                </v-row>


               

                 
                
            </div>
        </v-col>
    <!-- </v-row> -->
    <!-- </div> -->
</template>

<script>
import Header from '../../components/Dashboard/header';
import LeftMenu from '../../components/Dashboard/LeftMenu';
import {GET_DATA} from '../../shared/methods';
import {mapMutations, mapGetters} from 'vuex';
export default {
  name: 'Overview',
    layout: 'user',
  components: {
      'app-header': Header,
      'app-leftmenu': LeftMenu
  },
  data(){
      return{
          fundModal: false,
          walletView: true,
          amount: '', 
          message: '',
           dialog: false,
      }
  },
  computed: {
      ...mapGetters({
          getWallet: 'wallet/getWallet',
          getWalletAuthorizationCredential: 'wallet/getWalletAuthorizationCredential'
      })
  },
   mounted(){
      this.$store.dispatch('wallet/fetchWallet', GET_DATA('business_id'));
  },
  methods: {
       async fundWallet(){
           if(this.amount) {
           await this.$store.dispatch('wallet/fundWallet', {
              amount: this.amount,
              business_id: GET_DATA('business_id'),
              wallet_id: this.getWallet.wallet.id
          });
          if (this.getWalletAuthorizationCredential.message === "Authorization URL created") {
              window.location.href = this.getWalletAuthorizationCredential.data.authorization_url;
          } else {
              this.message = 'Unable to complete transaction at the moment, please try again later...';
          }
           } else {
               this.message = 'Amount is required!'
           }
          
      }
  }
}
</script>


<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
a{text-decoration: none;;}
.stepper-title{color:#6D0C17;font-size:30px;margin-bottom: 20px;}
.create-escrow-div{ width: 40%;}
.form-header{ font-size: 20px; color: #6D0C17;}
.d-col-2{padding:50px 70px;background:white;height:88vh;border-radius: 30px 0 0 0 !important;overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        
        }

.edit-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.edit-div { position: relative; border-radius:8px;  height: auto; padding: 50px 120px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}

 }

 
.transfer-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.transfer-div { text-align:center; position: relative; border-radius:8px; width: 45%; height: 65vh; padding: 50px 120px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}

 }

.wallet-card { background: #B848B6;padding: 40px 30px 0 30px;border-radius:10px; color: white; height:170px;position: relative;margin-bottom:10px}
.wallet-header { font-size: 12px; z-index:999;}
.wallet-sub { font-size: 30px;z-index:999;font-weight: 700;}
.wallet-img { position: absolute; bottom: 0; left: 0;z-index:10;}

.card-card { width:60%; background: #80202C;padding: 40px 30px 0 30px;border-radius:10px; color: white; height:130px;position: relative;margin-bottom:10px}
.card-card2 {text-align: left; width:60%; background: #80202C;padding: 20px 30px 0 30px;border-radius:10px; color: white; height:130px;position: relative;margin:0 auto;}

.card-header { font-size: 12px; z-index:999;}
.card-sub { font-size: 10px;z-index:999;font-weight: 700;}
.card-img { position: absolute; top: 10px; right: 10px;z-index:10;}


.fund-card { height: 100px;background: #6D0C17;text-align: center; border-radius: 10px; color: white;padding-top:30px;font-size:14px}

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
	background-color: #6338B2;
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
    background:white;
}

/* Zebra striping */
/* tr:nth-of-type(odd) {
	background: #eee;
	} */

th {
	background: #F8F8F8;
	color: #211C3C;
	padding: 15px;
	font-size: 11px;
    text-transform: uppercase;
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
a{text-decoration: none;;}
.stepper-title{color:#6D0C17;font-size:20px;margin-bottom: 20px;}
.create-escrow-div{ width: 100%;}
.form-header{ font-size: 20px; color: #6D0C17;}

.transfer-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.transfer-div { text-align:center; position: relative; border-radius:8px; width: 90%; height: auto; padding: 50px 20px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}

 }


.edit-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.edit-div { position: relative; border-radius:8px; width: 90%; height: auto; padding: 50px 20px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}

 }

.d-col-2{padding:50px 20px;background:white;height:90vh;border-radius: 30px 30px 0 0 !important;overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        
        }

.wallet-card { background: #B848B6;padding: 40px 30px 0 30px;border-radius:10px; color: white; height:170px;position: relative;margin-bottom:10px}
.wallet-header { font-size: 12px; z-index:999;}
.wallet-sub { font-size: 30px;z-index:999;font-weight: 700;}
.wallet-img { position: absolute; bottom: 0; left: 0;z-index:10;}

.card-card { width:100%; background: #80202C;padding: 40px 30px 0 30px;border-radius:10px; color: white; height:130px;position: relative;margin-bottom:10px}
.card-header { font-size: 12px; z-index:999;}
.card-sub { font-size: 10px;z-index:999;font-weight: 700;}
.card-img { position: absolute; top: 10px; right: 10px;z-index:10;}


.fund-card { height: 100px;background: #6D0C17;text-align: center; border-radius: 10px; color: white;padding-top:30px;font-size:14px}

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
	background-color: #6338B2;
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
    background:white;
}

/* Zebra striping */
/* tr:nth-of-type(odd) {
	background: #eee;
	} */

th {
	background: #F8F8F8;
	color: #211C3C;
	padding: 15px;
	font-size: 11px;
    text-transform: uppercase;
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




}
</style>