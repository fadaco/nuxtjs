<template>
    <div>
        
        	<div class="dashboard-row">
				<div class="dashboard-col-1">
					<app-leftbar></app-leftbar>
				</div>
				<div class="dashboard-col-2">
                    <div style="margin-bottom:30px;" class="heading">
  <div style="font-weight:700; font-size:15px;">Users</div>
                 <div style="font-size:12px">{{$moment(Date.now()).format('MMM Do YYYY')}}</div>
                    </div>


                    <div style="margin-bottom:30px;" class="metrics">
                    <v-row>
                        <v-col cols="12" sm="12" md="4">
                            <div class="metrics-card">
                              <v-row>
                                  <v-col cols="4">
                                     <div style="border-radius:8px;background:#6D0C17;padding: 20px 15px;">
                                    <v-icon dark>mdi-account-group</v-icon> 
                                     </div>
                                  </v-col>
                                  <v-col cols="8">
                                      <div>Total users</div>
                                      <div v-if="users.data" style="font-weight:700;font-size:20px;">{{users.data.length}}</div>
                                  </v-col>
                              </v-row>
                            </div>
                        </v-col>
                    </v-row>
                    
                    </div>
                  <v-col style="padding:0;" cols="12" sm="12" md="6">
                    <v-text-field
            label="Search for a user..."
            solo
          ></v-text-field>
                  </v-col>

                    <div style="background:white;border-radius:20px;padding-bottom:20px" class="table-pack">
                       <v-row class="table-header" no-gutters>
                            <v-col style="height:40px" cols="10">
                             <div style="line-height:40px;">Users List</div>
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
	
                    <tr @click="toProfile(item.id)" v-for="(item,index) in users.data" :key="index" >
							<td>
							{{index + 1}}
							</td>
							<td>
								 <v-avatar
                  size="36px"
                >
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar>
                <div style="margin-left:15px;display:inline-block">{{item.name}}</div>
							</td>
							<td>{{item.email}}</td>
							<td>{{item.phone_number}}</td>
							<td>verify</td>
						</tr>
                   	
					</tbody>
				</table>
                     </div>
                        
                     <div class="text-center">
		<div class="pagination">
     <v-pagination
     color="#2D0308"
              v-model="page"
              class="my-4"
              :length="3"
            ></v-pagination>
    </div>
			</div>
                    </div>
              
				</div>
                	<div class="dashboard-col-3">       
				        <app-rightbar></app-rightbar> 
				</div>
        	</div>
    </div>
</template>

<script>
import LeftSidebar from '../../components/Admin/LeftSideBar'
import RightSidebar from '../../components/Admin/RightSideBar'
export default {
     middleware: ['auth', 'isAdmin'],
    components: {
        'app-leftbar' : LeftSidebar,
        'app-rightbar' : RightSidebar
    },
    computed: {
        users(){
            return this.$store.state.admin.users;
        }
    },
    mounted(){
        this.$store.dispatch('admin/fetchUsers');
    },
    data() {
		return {
			page:1,
			headers: [
				'#',
				'Name',
				'Email',
				'Phone Number',
				'Status'
			]
		};
    },
    
    methods:{
        toProfile(id){
            this.$router.push({path:`/admin/${id}/userprofile`})
        }
    }
}
</script>

<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
@mixin clearfix {
    &::after {
      content: "";
    display: table;
    clear: both;  
    } 
}


.metrics-card{
    background: white;
    padding: 15px;
    border-radius: 8px;
}

.table-pack {}

.table-header{
      padding: 10px 30px;
    font-weight: 500px;
    font-size: 15px;
        border-radius: 20px 20px 0 0;
    background:#ECE9F2;
    color: #6D0C17;
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
// tr:hover {
// 	background: rgb(252, 253, 255);
// }

.image-style {
	width: 70px;
}
}
</style>

