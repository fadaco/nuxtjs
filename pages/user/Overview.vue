<template>
  <!-- <div> -->
  <!-- <app-header></app-header> -->

  <!--<v-row class = "d-row" no-gutters>
        <v-col class = "hidden-sm-and-down d-col-1" cols="12" sm="12" md="2">
       <app-leftmenu></app-leftmenu>
        </v-col> -->
  <v-col style="background: #f7f7f7" cols="12" sm="12" md="10">
    <div class="d-col-2">
      <img
        class="floating-spiral hidden-sm-and-down"
        src="../.././assets/spiral.svg"
        alt=""
      />
      <div class="wallet-div">
        <div class="wallet-header">Wallet Balance</div>
         <router-link to="/user/wallet" class="remocedecoration">
        <div class="wallet-value">
          <span style="font-size: 15px">₦</span>0<span style="font-size: 15px"
            >.00</span
          >
        </div>
         </router-link>
      </div>

      <div class="escrow-div">
        <div class="escrow-header">Business</div>
        <v-row>
          <v-col cols="12" sm="12" md="4">
            <div class="escrow escrow-col">
              <div>In Progress</div>
              <div class="escrow-col-2-s2">0</div>
              <v-divider></v-divider>
              <!-- <v-btn style="margin-top:10px;" small text class="sanitize" color="#D594AF"> <v-icon style="margin-right:5px;" small color="#D594AF">mdi-plus-circle</v-icon>Create Business


                             </v-btn>  -->

              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#D594AF"
                    style="margin-top: 10px"
                    small
                    text
                    class="sanitize"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon style="margin-right: 5px" small color="#D594AF"
                      >mdi-plus-circle</v-icon
                    >Create Business
                  </v-btn>
                </template>

                <v-card class="px-5">
                  <v-card-title class="lighten-2">
                    Create Business
                  </v-card-title>

                  <div v-if="getBusinessError.length > 0">
                    <div v-for="(item, index) in getBusinessError" :key="index">
                      <p>{{ item }}</p>
                    </div>
                  </div>

                  <v-text-field
                    color="#180A35"
                    v-model="business.business_name"
                    label="Business Name"
                    dense
                    placeholder="Enter business name"
                    outlined
                  ></v-text-field>

                  <v-text-field
                    color="#180A35"
                    dense
                    v-model="business.email"
                    label="Email"
                    placeholder="Enter email"
                    outlined
                  ></v-text-field>

                  <v-text-field
                    color="#180A35"
                    v-model="business.phone_number"
                    dense
                    label="Phone Number"
                    placeholder="Enter phone number"
                    outlined
                  ></v-text-field>

                  <v-switch
                    v-model="business.is_otp"
                    label="Is Otp?"

                  ></v-switch>

                  <v-text-field
                  dense
                    color="#180A35"
                    v-model="business.otp_length"
                    label="Otp length"
                    placeholder="Enter otp length"
                    outlined
                  ></v-text-field>

                  <v-select
                    outlined
                    :items="otpType"
                    dense
                    v-model="business.otp_type"
                    label="Otp type"
                    required
                  ></v-select>

                  <v-textarea rows="2" color="teal" outlined v-model="business.address">
                    <template v-slot:label>
                      <div>Address <small>(optional)</small></div>
                    </template>
                  </v-textarea>

                  <v-textarea
                  rows="2"
                    color="teal"
                    outlined
                    v-model="business.otp_message"
                  >
                    <template v-slot:label>
                      <div>Message <small></small></div>
                    </template>
                  </v-textarea>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="createBusiness">
                      Submit
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <div class="escrow escrow-col-2">
              <div>Completed</div>
              <div class="escrow-col-2-s2">0</div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="escrow-div">
        <div class="escrow-header">Transaction</div>
        <v-row>
          <v-col cols="12" sm="12" md="4">
            <router-link to="/user/transactions" class="remocedecoration">
              <div class="escrow escrow-col-3">
                <div>Basic sms</div>
                <div class="escrow-col-2-s2">0</div>
              </div>
            </router-link>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <router-link to="/user/transactions" class="remocedecoration">
              <div class="escrow escrow-col-4">
                <div>OTP sms</div>
                <div class="escrow-col-2-s2">0</div>
              </div>
            </router-link>
          </v-col>
        </v-row>
      </div>

      <div class="overview-table">
        <v-row>
          <v-col cols="12" sm="12" md="8">
            <div class="table-1">
              <div style="color: #1f0e3e; margin-bottom: 10px">
                Business Analytics
              </div>
              <v-divider></v-divider>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <div class="table-2">
              <div style="color: #1f0e3e; margin-bottom: 10px">
                Transactions
              </div>
              <v-divider></v-divider>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-col>
  <!-- </v-row> -->
  <!-- </div> -->
</template>

<script>
import Header from "../../components/Dashboard/header";
import LeftMenu from "../../components/Dashboard/LeftMenu";
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Overview",
  middleware: "auth",
  layout: "user",
  components: {
    "app-header": Header,
    "app-leftmenu": LeftMenu,
  },
  data() {
    return {
      dialog: false,
      otpType: ["numeric", "alphanumeric", "alphabet"],
      business: {
        email: "",
        phone_number: "",
        address: "",
        is_otp: null,
        otp_length: null,
        otp_type: "",
        otp_message: "",
        business_name: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      getBusinessError: "business/getBusinessError",
    }),
  },
  methods: {
    async createBusiness(){
      await this.$store.dispatch('business/createBusiness', this.business);
    }
  }


}
</script>


<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
.remocedecoration {
  text-decoration: none;
  cursor: pointer;
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
  color: #6d0c178e;
}
.wallet-value {
  background: #ece9f2;
  color: #6d0c17;
  text-align: center;
  width: 20%;
  border-radius: 10px;
  height: 100px;
  line-height: 100px;
  margin-top: 20px;
  font-size: 40px;
}

.escrow-div {
  margin-bottom: 50px;
}
.escrow {
  border-radius: 10px;
  padding: 25px;
  height: 160px;
}
.escrow-col {
  background: #f7e1ea;
  color: #1f0e3e;
}
.escrow-col-2 {
  background: #f3fad2;
  color: #1f0e3e;
}
.escrow-col-3 {
  background: #fbd6db;
  color: #1f0e3e;
}
.escrow-col-4 {
  background: #e6ebfa;
  color: #1f0e3e;
}
.escrow-header {
  font-size: 18px;
  color: #6d0c178e;
}
.escrow-col-2-s2 {
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
    color: #6d0c178e;
  }
  .wallet-value {
    background: #ece9f2;
    color: #6d0c17;
    text-align: center;
    width: 100%;
    border-radius: 10px;
    height: 100px;
    line-height: 100px;
    margin-top: 20px;
    font-size: 40px;
  }

  .escrow-div {
    margin-bottom: 50px;
  }
  .escrow {
    border-radius: 10px;
    padding: 25px;
    height: 160px;
  }
  .escrow-col {
    background: #f7e1ea;
    color: #1f0e3e;
  }
  .escrow-col-2 {
    background: #f3fad2;
    color: #1f0e3e;
  }
  .escrow-col-3 {
    background: #fbd6db;
    color: #1f0e3e;
  }
  .escrow-col-4 {
    background: #e6ebfa;
    color: #1f0e3e;
  }
  .escrow-header {
    font-size: 20px;
    color: #6d0c178e;
  }
  .escrow-col-2-s2 {
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
}
</style>
