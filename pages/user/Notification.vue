<template>
    <div>
         <div v-show="message" class="ntf-bg hidden-md-and-up">
         <div class="ntf-div">
                <v-icon @click="message = false" class="form-close" style="font-size:25px" color="black">mdi-close</v-icon>
                <v-card-actions style="margin:0;padding:0">
                <div class="ntf-open-header">Wallet Top Up</div>
                <v-spacer></v-spacer>
                <v-btn style="color:#15072F" color="white" depressed class="sanitize"><v-icon small color="#15072F">mdi-delete</v-icon>Clear</v-btn>
                      </v-card-actions>
                    <br><br>
                    <p style="font-size:14px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                  
        </div>
         </div>

        <app-header></app-header>
    <v-row class = "d-row" no-gutters>
        <v-col class = "hidden-sm-and-down d-col-1" cols="12" sm="12" md="2">
        <app-leftmenu></app-leftmenu>
        </v-col>
         <v-col style="background:#F7F7F7" cols="12" sm="12" md="10">
            <div class = "d-col-2">
          <v-row>
              <v-col cols="12" sm="12" md="5">
              <div class="ntf-1">
                 <div class="ntf-header">Notifications <span style="font-size:14px;margin-left:20px;padding:5px;border-radius:10px;background:#F5F2FA">12</span></div>
                 <br>
                 <div @click="message = !message" class="ntf-list">
                  <div class="ntf-list-left">
                  Wallet Top-Up
                  <br>
                  Credit
                  </div>
                   <div class="ntf-list-right">
                 2:30pm
                  <br>
                  <v-icon small>mdi-delete</v-icon> Clear
                  </div>
                 </div>
                 
                 
              </div>
              

              </v-col>
                <v-col cols="12" sm="12" md="7" class="hidden-sm-and-down">
                  <div class="ntf-2">
                     <div v-if="message">
                     <div style="color:#5D30AF;font-size:13px;margin-bottom:10px;">< Back</div>
                <v-card-actions style="margin:0;padding:0">
                <div class="ntf-open-header">Wallet Top Up</div>
                <v-spacer></v-spacer>
                <v-btn style="color:#15072F" color="white" depressed class="sanitize"><v-icon small color="#15072F">mdi-delete</v-icon>Clear</v-btn>
                      </v-card-actions>
                    <br><br>
                    <p style="font-size:14px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                     </div>

                     <div class="no-message" v-else>
                       <v-icon class="no-message-icon">mdi-bell-off</v-icon>
                       <div class="no-message-header">Select a notification to view</div>
                     </div>

              </div>
              </v-col>
          </v-row>
                
                 
            </div>
        </v-col>
    </v-row>
    </div>
</template>

<script>
import Header from '../../components/Dashboard/header'
import LeftMenu from '../../components/Dashboard/LeftMenu'
export default {
  name: 'Overview',
  components: {
      'app-header': Header,
      'app-leftmenu': LeftMenu
  },
  data(){
    return{
      message: false,
      modal: true
    }
    
  }

}
</script>


<style src="../../App.css" scoped></style>

<style lang="scss" scoped>

.ntf-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.ntf-div { position: relative; border-radius:8px; width: 35%; height: 50vh; padding: 50px 120px;background:#ffffff;z-index: 99999999;}
.ntf-icon {font-size: 100px;}
.ntf-header{font-size:20px}
.form-close{position: absolute; right: 20px; top: 20px;}


.no-message {text-align:center;padding:170px 0 0 0}
.no-message-icon {font-size:50px;color: rgb(186, 186, 186);margin-bottom: 10px;}
.no-message-header {font-size:20px;color: rgb(186, 186, 186);}
.d-col-2{background:white;height:88vh;border-radius: 30px 0 0 0 !important;overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        
        }

.ntf-1{ }
.ntf-header { color: #6D0C17; font-size: 23px; padding: 10px 20px;}
.ntf-open-header { color: #6D0C17; font-size: 18px;}
.ntf-list { background: #F5F2FA; padding:20px;cursor: pointer;margin-bottom: 20px;}
.ntf-list-left {display: inline-block; color: #6D0C17; font-size: 14px;}
.ntf-list-right {display: inline-block; float: right;  color: #6D0C17;font-size: 14px;}

.ntf-2{background:#F0F0F0;height:88vh;border-radius: 30px 0 0 0 !important;overflow-y: scroll;padding:40px;}
@media (max-width: 991px) {

}
@media (max-width: 767px) {

}
@media (max-width: 479px) {
.ntf-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.ntf-div {  position: relative; border-radius:8px; width: 90%; height: auto; padding: 50px 20px;background:#ffffff;z-index: 99999999;}
.form-close{position: absolute; right: 20px; top: 20px;}

.d-col-2{padding:50px 20px;background:white;height:90vh;border-radius: 30px 30px 0 0 !important;overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        
        }


}
</style>