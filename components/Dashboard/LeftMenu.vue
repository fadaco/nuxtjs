<template>
  <div class="left-menu-div">
    <v-select
      :items="businesses"
      label="Select Business"
      item-text="business_name"
      item-value="id"
      v-model="business_title"
      @change="changeBusiness($event)"
    ></v-select>
    <br />
    <nav class="navigation">
      <ul class="mainmenu">
        <li class="mainmenu-li">
          <router-link to="/user/overview"
            ><v-icon class="nav-icon">mdi-apps</v-icon>Dashboard</router-link
          >
        </li>
        <li class="mainmenu-li">
          <router-link to="/user/transactions"
            ><v-icon class="nav-icon">mdi-bank-transfer</v-icon
            >Transactions</router-link
          >
        </li>
        <li class="mainmenu-li">
          <router-link to="/user/wallet"
            ><v-icon class="nav-icon">mdi-wallet</v-icon>Wallet</router-link
          >
        </li>
        <li class="mainmenu-li">
          <router-link to="/user/profile"
            ><v-icon class="nav-icon">mdi-wrench</v-icon>Settings</router-link
          >
        </li>
        <li @click="logOut" class="mainmenu-li">
          <div class="logOut">
            <v-icon class="nav-icon">mdi-power</v-icon>Logout
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
import { mapMutations, mapGetters } from "vuex";
import { SAVE_DATA, REMOVE_DATA } from "../../shared/methods";
export default {
  data() {
    return {
      businesses: [],
      business_title: "",
    };
  },

  async mounted() {
    await this.$store.dispatch("business/fetchBusinesses");
    this.businesses = await [...this.getBusinesses];
    this.business_title = this.businesses[0];
    SAVE_DATA("business_id", this.businesses[0].id);
    SAVE_DATA("app_id", this.businesses[0].app_id);
    await this.$store.dispatch(
      "business/fetchBusinessForUserById",
      this.businesses[0].id
    );
  },
  computed: {
    ...mapGetters({
      getBusinesses: "business/getBusinesses",
    }),
  },
  methods: {
    async changeBusiness(data) {
      await SAVE_DATA("business_id", data);
      await this.$store.dispatch("business/fetchBusinessForUserById", data);
    },

    async logOut() {
      //call endpoint to destroy edpoint on server side
      await this.$cookies.remove("Authorization");
      await this.$cookies.remove("user");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.left-menu-div {
  height: 88vh;
  padding: 20px 40px;
  background: #f7f7f7;
}
.greeting {
  font-size: 15px;
  color: #1f0e3e;
}
.user-name {
  font-size: 25px;
  color: #80202c;
}
.side-bar-header {
  color: white;
  text-align: center;
  font-size: 23px;
  margin-bottom: 40px;
  font-weight: 700;
}

@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.activeNav {
  background-color: #ece9f2;
  border-radius: 5px;
}

.activeNav .mainmenu-li a {
  color: #000000;
}

.activeNav .mainmenu-li a .nav-icon {
  color: #000000;
}

.mainmenu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.mainmenu-li {
  margin-bottom: 20px;
  padding: 10px;
}
.mainmenu-li a,
.logOut {
  letter-spacing: 1px;
  color: #6d0c17;
  font-weight: 500;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
}

.mainmenu-li a:hover {
  color: rgb(0, 0, 0);
}

.mainmenu-li a:hover .nav-icon {
  color: rgb(0, 0, 0);
}
.nav-icon {
  color: #6d0c17;
  font-size: 19px;
  margin-top: -3px;
  margin-right: 7px;
}

.submenu {
  margin-top: 10px;
  list-style-type: none;
}

.submenu-li {
  margin-bottom: 5px;
}

.submenu-li a {
  letter-spacing: 1px;
  color: #adb0b4;
  font-size: 12px;
  text-decoration: none;
}

.submenu-li a:hover {
  color: rgb(51, 51, 51);
}

.nav-arrow {
  color: #adb0b4;
  font-size: 15px;
  margin-top: -3px;
  margin-right: 7px;
}
</style>
