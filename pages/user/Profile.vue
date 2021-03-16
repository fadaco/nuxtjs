<template>
  <v-col style="background: #f7f7f7" cols="12" sm="12" md="10">
    <div class="d-col-2">
      <v-tabs show-arrows color="#6338B2" background-color="transparent">
        <v-tab class="sanitize">Account Settings</v-tab>

        <v-tab class="sanitize">Business Settings</v-tab>
        <v-tab class="sanitize">Keys</v-tab>

        <!-- Account Settings -->
        <v-tab-item style="border-radius: 20px">
          <v-card class="profile-card" flat>
            <br />
            <div class="profile-div">
              <v-row>
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    style="height: 70px"
                    v-model="user.name"
                    color="#180A35"
                    label="Name"
                    outlined
                    placeholder="Enter Name"
                    hint="name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    style="height: 70px"
                    v-model="user.phone_number"
                    outlined
                    color="#180A35"
                    label="Phone Number"
                    hint="Phone Number"
                    placeholder="Enter Phone Number"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    style="height: 70px"
                    readonly
                    outlined
                    v-model="user.email"
                    color="#180A35"
                    label="Email"
                    placeholder="Binary"
                    hint="email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-switch
                    v-model="user.changePassword"
                    dense
                    label="Check to change your Password"
                  ></v-switch>
                </v-col>
              </v-row>

              <v-row v-if="user.changePassword">
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    color="#180A35"
                    label=" Old Password"
                    v-model="user.oldPassword"
                    placeholder="Enter Old Password"
                    @click:append="show2 = !show2"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show2 ? 'text' : 'password'"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    color="#180A35"
                    label=" New Password"
                    v-model="user.newPassword"
                    placeholder="Enter New Password"
                    @click:append="show1 = !show1"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                  ></v-text-field>
                </v-col>
              </v-row>

              <br />
            </div>
            <br />
            <v-btn
              class="sanitize banner-btn"
              color="#FAA722"
              x-large
              depressed
              dark
              @click="saveChanges"
            >
              Save Changes
              <v-icon dark>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card>
        </v-tab-item>

        <!-- Business Settings -->
        <v-tab-item>
          <v-card class="profile-card" flat>
            <v-row>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  style="height: 70px"
                  readonly
                  v-model="business.email"
                  color="#180A35"
                  label="Email"
                  placeholder="Email"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  style="height: 70px"
                  v-model="business.phone_number"
                  color="#180A35"
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="12" md="8">
                <v-text-field
                  style="height: 70px"
                  v-model="business.business_name"
                  color="#180A35"
                  label="Business Name"
                  placeholder="Enter Business Name"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="12" md="8">
                <v-textarea
                  rows="1"
                  color="teal"
                  outlined
                  v-model="business.address"
                >
                  <template v-slot:label>
                    <div>Address <small>(optional)</small></div>
                  </template>
                </v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-switch
                  v-model="business.is_otp"
                  label="Check this box to signify your message type will be OTP (one time password)"
                ></v-switch>
              </v-col>

              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  style="height: 70px"
                  v-model="business.otp_length"
                  color="#180A35"
                  label="Otp Length"
                  placeholder="Enter Otp Length"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <v-select
                  outlined
                  :items="otpType"
                  v-model="business.otp_type"
                  label="Otp type"
                  required
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="8">
                <v-textarea
                  color="teal"
                  outlined
                  rows="2"
                  v-model="business.otp_message"
                >
                  <template v-slot:label>
                    <div>Text Message</div>
                  </template>
                </v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <v-btn
                style="color: #fff"
                large
                right
                depressed
                color="rgb(250 167 34)"
                @click="saveConfiguration"
              >
                Update Settings
              </v-btn>
            </v-row>
          </v-card>
        </v-tab-item>

        <!-- Keys -->
        <v-tab-item>
          <v-card class="profile-card" flat>
            <br /><br />
            <v-row>
              <p>
                <small>
                  Use the test keys to test out our apis and switch to live keys
                  when you are ready to go live</small
                >
              </p>
              <v-col
                cols="12"
                sm="12"
                md="7"
                v-if="getBusinessDetail.business_keys"
              >
                <v-text-field
                  style="height: 70px"
                  readonly
                  v-model="getBusinessDetail.business_keys.test_key"
                  color="#180A35"
                  label="Test Key"
                  placeholder="Enter Business Name"
                  outlined
                >
                  <template v-slot:append>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-icon v-on="on" @click="generateNewKey('test_key')">
                          mdi-help-circle-outline
                        </v-icon>
                      </template>
                      Generate new test key
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="12"
                md="7"
                v-if="getBusinessDetail.business_keys"
              >
                <v-text-field
                  style="height: 70px"
                  readonly
                  v-model="getBusinessDetail.business_keys.live_key"
                  color="#180A35"
                  label="Live Key"
                  placeholder="Enter Business Name"
                  outlined
                >
                  <template v-slot:append>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-icon v-on="on" @click="generateNewKey('live_key')">
                          mdi-help-circle-outline
                        </v-icon>
                      </template>
                      Generate new live key
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-col>
  <!-- </v-row>
    </div> -->
</template>

<script>
import Header from "../../components/Dashboard/header";
import LeftMenu from "../../components/Dashboard/LeftMenu";
import { GET_DATA } from "../../shared/methods";
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Overview",
  layout: "user",
  components: {
    "app-header": Header,
    "app-leftmenu": LeftMenu,
  },
  data() {
    return {
      bankModal: false,
      row: "",
      otpType: ["Numeric", "Alphanumeric", "Alphabet"],
      business: {},
      show2: false,
      show1: false,
      user: {
        changePassword: false,
        oldPassword: "",
        newPassword: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      getBusinessDetail: "business/getBusinessDetail",
      getBusinessId: "business/getBusinessId",
      getUser: "business/getUser",
    }),
  },
  watch: {
    getBusinessId: () => {
      console.log("business id has changed!!");
    },
  },
  async mounted() {
    await this.$store.dispatch(
      "business/fetchBusinessForUserById",
      GET_DATA("business_id")
    );
    await this.$store.dispatch("business/fetchUser");
    this.user = { ...this.getUser };
    this.business = { ...this.getBusinessDetail };
    // if(this.getBusinessDetail.message === 'success') {
    //   this.business = {...this.getBusinessDetail.data}
    // }
  },
  methods: {
    async saveChanges() {
      await this.$store.dispatch("business/saveUser", this.user);
    },
    async saveConfiguration() {
      await this.$store.dispatch("business/updateBusiness", this.business);
    },
    async generateNewKey(type) {
      await this.$store.dispatch("business/generateNewKey", {
        business_id: this.business.id,
        type: type,
      });
    },
  },
};
</script>


<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
.v-text-field input {
  text-transform: capitalize;
}

.form-header {
  font-size: 20px;
  color: #6d0c17;
}
.edit-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #070707a3;
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.edit-div {
  position: relative;
  border-radius: 8px;
  width: 45%;
  height: 70vh;
  padding: 50px 120px;
  background: #ffffff;
  z-index: 99999999;
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

.wallet-card {
  background: #b848b6;
  padding: 40px 30px 0 30px;
  border-radius: 10px;
  color: white;
  height: 170px;
  position: relative;
  margin-bottom: 10px;
}
.wallet-header {
  font-size: 12px;
  z-index: 999;
}
.wallet-sub {
  font-size: 30px;
  z-index: 999;
  font-weight: 700;
}
.wallet-img {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
}
.profile-div {
  width: 60%;
}
.profile-div2 {
  width: 40%;
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

.profile-card {
  padding: 20px;
}

@media (max-width: 991px) {
}
@media (max-width: 767px) {
}
@media (max-width: 479px) {
  .edit-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #070707a3;
    z-index: 9999999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edit-div {
    position: relative;
    border-radius: 8px;
    width: 90%;
    height: auto;
    padding: 50px 20px;
    background: #ffffff;
    z-index: 99999999;
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

  .wallet-card {
    background: #b848b6;
    padding: 40px 30px 0 30px;
    border-radius: 10px;
    color: white;
    height: 170px;
    position: relative;
    margin-bottom: 10px;
  }
  .wallet-header {
    font-size: 12px;
    z-index: 999;
  }
  .wallet-sub {
    font-size: 20px;
    z-index: 999;
    font-weight: 700;
  }
  .wallet-img {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
  }

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
  .profile-div {
    width: 100%;
  }
  .profile-div2 {
    width: 100%;
  }
  .profile-card {
    padding: 20px;
  }
}
</style>
