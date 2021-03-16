<template>
    <div>
        
        	<div class="dashboard-row">
				<div class="dashboard-col-1">
					<app-leftbar></app-leftbar>
				</div>
				<div class="dashboard-col-2">
                <div style="margin-bottom:30px;" class="heading">
                <div style="font-weight:700; font-size:15px;">Wallet Transaction/{{wallet_transaction.reference}}</div>
                 <div style="font-size:12px">{{$moment(Date.now()).format('MMM Do YYYY')}}</div>
                    </div>
                    <v-row>
                        <v-col cols="6">
                         <div style="background:white;border-radius:5px;">
                             <div>
                  <v-row no-gutters>
                      <v-col cols="12">
                          <div style=";border-radius:5px;padding:20px;" v-if="wallet_transaction.wallet">
                             <div style=" font-size:13px;color:grey;">App Id</div>
         <div style="margin-top:5px;font-weight:600;font-size:13px;">{{wallet_transaction.wallet.business.app_id}}</div>
                          </div>
                      </v-col>
                      <v-col cols="12">
                          <div style=";border-radius:5px;padding:20px;" v-if="wallet_transaction.wallet">
                             <div style=" font-size:13px;color:grey;">Business Name</div>
         <div style="margin-top:5px;font-weight:600;font-size:13px;">{{wallet_transaction.wallet.business.business_name}}</div>
                          </div>
                      </v-col>
                                            <v-col cols="12">
                          <div style=";border-radius:5px;padding:20px;">
                             <div style=" font-size:13px;color:grey;">Reference Number</div>
         <div style="margin-top:5px;font-weight:600;font-size:13px;">{{wallet_transaction.reference}}</div>
                          </div>
                      </v-col>                      <v-col cols="12">
                          <div style=";border-radius:5px;padding:20px;">
                             <div style=" font-size:13px;color:grey;">Access Code</div>
         <div style="margin-top:5px;font-weight:600;font-size:13px;">{{wallet_transaction.access_code}}</div>
                          </div>
                      </v-col>
                  </v-row>
                                   </div>
            
                         </div>
                        </v-col>
                        <v-col cols="6">
                             <div style="background:white;border-radius:5px;">
                             <div>
                  <v-row no-gutters>
                      <v-col cols="12">
                          <div style=";border-radius:5px;padding:20px;">
                             <div style=" font-size:13px;color:grey;">Amount</div>
         <div style="margin-top:5px;font-weight:600;font-size:13px;">{{wallet_transaction.amount}}</div>
                          </div>
                      </v-col>
                     
                      <v-col cols="12">
                          <div style=";border-radius:5px;padding:20px;" v-if="wallet_transaction.wallet">
                             <div style=" font-size:13px;color:grey;">Wallet Balance</div>
         <div style="margin-top:5px;font-weight:600;font-size:13px;">{{wallet_transaction.wallet.balance}}</div>
                          </div>
                      </v-col>
                        <v-col cols="12">
                          <div style=";border-radius:5px;padding:20px;">
                             <div style=" font-size:13px;color:grey;">Wallet Transaction Date</div>
         <div style="margin-top:5px;font-weight:600;font-size:13px;"> {{$moment(wallet_transaction.created_at).format('MMM Do YYYY')}}</div>
                          </div>
                      </v-col>
                  </v-row>
                             </div>
                             </div>

                        </v-col>
                    </v-row>
<br>
        <v-card flat style="padding:30px 0;background:#F2F2F2;">
                                    <div style="background:white;border-radius:20px;" class="table-pack">
                        <v-row class="table-header" no-gutters>
                            <v-col style="height:40px" cols="10">
                             <div style="line-height:40px;">Other Transactions</div>
                            </v-col>

                             <v-col style="height:40px"  cols="2">
                             <v-select
						color="#333333"
						placeholder="Sort by"
						dense
						prepend-icon="mdi-filter"
					></v-select>
                            </v-col>
                        </v-row>
                
                    <div class="table-div" id="scroll">
                     <table>
					<thead>
						<tr>
							<th v-for="header in headers" :key="header.id">{{ header }}</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="(item,index) in 5" :key="index" >
							<td>1</td>
							<td>Sage 45</td>
							<td>Lagos</td>
							<td>20</td>
                            <td>7000</td>
							<td style="color:#2BC448">Active</td>
                            <td>22/10/20</td>
						</tr>
					</tbody>
				</table>
                     </div>
                    </div>
        </v-card>
    
				</div>
                	<div class="dashboard-col-3">       
				        <app-rightbar></app-rightbar> 
				</div>
        	</div>
    </div>
</template>

<script>
import LeftSidebar from '../../../components/Admin/LeftSideBar'
import RightSidebar from '../../../components/Admin/RightSideBar'
export default {
    components: {
        'app-leftbar' : LeftSidebar,
        'app-rightbar' : RightSidebar
    },
    mounted(){
         this.$store.dispatch('admin/fetchWalletTransactionById', this.$route.params.wallet);
    },
    computed: {
         wallet_transaction(){
            return this.$store.state.admin.wallet_transaction
        }
    },
    data(){
        return{
            	headers: [
				'#',
				'Name',
				'Location',
				'Qty',
                'Price',
                'Status',
                'Date Posted'
			]
        }
    },
    
}
</script>

<style src="../../../App.css" scoped></style>

<style lang="scss" scoped>
@mixin clearfix {
    &::after {
      content: "";
    display: table;
    clear: both;  
    } 
}

.chat-left{margin-bottom: 20px;display: block; overflow: hidden;}
.chat-right{margin-bottom: 20px;float: right;display: block;overflow: hidden;}
.chat-box-pack{display:inline-block}
.chat-box-pack-2{display:inline-block}
.chat-box{background:#ffffff;padding:10px;border-radius: 0 10px 10px 10px;margin-bottom:10px;width:200px;}
.chat-box-2{background: #6D0C17;padding:10px;border-radius: 10px 0 10px 10px;margin-bottom:10px;color:white;width:200px;}

.table-header{
      padding: 10px 30px;
    font-weight: 500px;
    font-size: 16px;
        border-radius: 20px 20px 0 0;
    background:#FBD6DB;
    color: #2e2e2e;
}



.dashboard-row {

    .dashboard-col-1{
        background-color: #6D0C17;
        width: 17%;
       left:0;
       top:0;
        height: 100vh;
        position: fixed;
        padding: 40px 20px;
        // @include respond(phone){ display: none; } ;
        // @include respond(tablet){ display: none;  } ;


    }
    .dashboard-col-2{
        padding: 30px;
        position: relative;
        background-color: #F2F2F2;
        width: 62%;
        height: 100vh;
        margin: 0 0 0 17%;
        overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        // @include respond(phone){ width:100%; float: none; display: block;  } ;
        // @include respond(tablet){  width:100%; float: none; display: block;  } ;
    }
        .dashboard-col-3{
            box-sizing: border-box;
        background-color: #ffffff;
              width: 21%;
        right: 0;
        top:0;
        height: 100vh;
        position: fixed;
        padding: 20px 30px;
        // @include respond(phone){ display: none; } ;
        // @include respond(tablet){ display: none;  } ;


    }
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
	background-color: #bd161c;
	height: 5px;
}
.table-div {
	overflow-y: hidden;
	overflow-x: scroll;
	width: 100%;
    padding: 20px 30px;

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


.image-style {
	width: 70px;
}
</style>

