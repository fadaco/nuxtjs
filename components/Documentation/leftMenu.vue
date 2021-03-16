<template>
  <div class="left">
    <div v-show="!isSmallScreen" class="nav-container">
      <ul class="nav">
        <li
          class="list"
          v-on:click="setActiveTab(1)"
          :class="activeTab === 1 ? 'active' : ''"
        >
          <a class="tiles" href="#introduction">
            <v-icon class="icon">mdi-home</v-icon>
            <span class="text">Introduction</span>
          </a>
        </li>
        <li
          v-on:click="setActiveTab(2)"
          :class="activeTab === 2 ? 'active' : ''"
        >
          <a class="tiles" href="#authentication">
            <v-icon class="icon">mdi-arrow-vertical-lock</v-icon>
            <span class="text">Authentication</span>
          </a>
        </li>
        <li
          v-on:click="setActiveTab(3)"
          :class="activeTab === 3 ? 'active' : ''"
        >
          <a class="tiles" href="#errors">
            <v-icon class="icon">mdi-alert-circle</v-icon>
            <span class="text">Errors</span>
          </a>
        </li>
        <br />
        <p class="textInLink">
           <span class="">Our End Points </span>
       
        </p>

        <li
          class="list-small"
          v-on:click="setActiveTab(4)"
          :class="activeTab === 4 ? 'active' : ''"
        >
          <a href="#sendotp">
            <span class="text">- Send OTP Message</span>
          </a>
        </li>
        <li
          class="list-small"
          v-on:click="setActiveTab(5)"
          :class="activeTab === 5 ? 'active' : ''"
        >
          <a href="#validateotp">
            <span class="text">- Validate OTP</span>
          </a>
        </li>
        <li
          class="list-small"
          v-on:click="setActiveTab(6)"
          :class="activeTab === 6 ? 'active' : ''"
        >
          <a href="#sendsms">
            <span class="text">- Send non-OTP Message</span>
          </a>
        </li>

        <li
          class="list-small"
          v-on:click="setActiveTab(7)"
          :class="activeTab === 7 ? 'active' : ''"
        >
          <a href="#fetchmybusinesses">
            <span class="text">- Fetch My Businesses</span>
          </a>
        </li>
        <li
          class="list-small"
          v-on:click="setActiveTab(8)"
          :class="activeTab === 8 ? 'active' : ''"
        >
          <a href="#allbusinesstransactions">
            <span class="text">- All Business Transactions</span>
          </a>
        </li>

        <li
          class="list-small"
          v-on:click="setActiveTab(9)"
          :class="activeTab === 9 ? 'active' : ''"
        >
          <a href="#transactions">
            <span class="text">- Single Business Transactions</span>
          </a>
        </li>

        <li
          class="list-small"
          v-on:click="setActiveTab(10)"
          :class="activeTab === 10 ? 'active' : ''"
        >
          <a href="#countrycodes">
            <span class="text">- Countries and Dialling Codes</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
    };
  },

  computed: {
    isSmallScreen() {
      return (
        this.$vuetify.breakpoint.name == "xs" ||
        this.$vuetify.breakpoint.name == "sm"
      );
    },
  },

  methods: {
    setActiveTab(num) {
      this.activeTab = num;
    },
  },
};
</script>



<style src="../../App.css" scoped></style>

<style scoped>
* {
  box-sizing: border-box;
}

.row {
  display: flex;
  height: 85vh;
  overflow-x: scroll;
  margin: 0px;
  padding: 0px;
}

.double-block {
  display: flex;
  flex-wrap: wrap;
}
.double-block-first-item {
  flex: 50%;
}
.double-block-first-item .block {
  width: 100%;
}
.double-block-second-item {
  flex: 50%;
}
.space {
  flex: 5%;
}

.list a {
  z-index: 20;
}

.unlink {
  cursor: auto;
  color: black;
}

.textInLink {
  margin-left: 30px;
  text-transform: uppercase;
}

.block {
  padding: 5px;
  margin: 5px;
  width: 95%;
}

h1 {
  font-size: 1em;
  text-align: center;
  color: #eee;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
  padding: 20px;
}
.nav-container {
  height: 85vh;
  /* overflow-y: auto; */
  width: 300px;
  margin-top: 20px;
  transition: none;
  border-right: 3px solid #5d30b03d;
}
.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.hamburger {
  display: none;
}

li {
  height: 50px;
  position: relative;
  background: white;
}

a {
  text-decoration: none;
  display: block;
  height: 100%;
  width: 100%;
  line-height: 50px;
  color: #011b33;
  font-weight: bold;
  padding-left: 0;
  border-left: 5px solid transparent;
  letter-spacing: 1px;
  transition: all 0.4s linear;
}

.diffLink {
  text-decoration: none;
  display: inline;
  height: unset;
  width: unset;
  line-height: 0px;
  color: #6439b2;
  font-weight: normal;
  padding-left: 0;
  border-left: 0px solid transparent;
  letter-spacing: 0px;
  transition: none;
}

.list-small a {
  padding-left: 10%;
  font-size: 0.82rem;
  border-left: 4px solid transparent;
}

td {
  padding: 10px;
}

.active a {
  color: #5d30af;
  border-left: 5px solid #5d30af;
  background-color: #fff;
  outline: 0;
}
li:not(.active):hover a {
  color: #09a5db;
  border-left: 5px solid #fcfcfc;
  background-color: #fff;
}

i[class^="fa"],
.icon {
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 1.5em;
  transition: none;
  /* transition: all 0.3s linear; */
}
.nav-container:hover > ul > .list-small > a .text {
  padding-left: 0px;
}
.nav-container:hover > ul > li > a .text {
  display: block;
  padding-left: 30%;
}

.nav-container > ul > li > .tiles .text {
  display: block;
  padding-left: 30%;
}

a:hover .text {
  display: block;
  color: #5d30af;
}

.block {
  width: 80%;
}
.theme--light.v-application code {
  background-color: transparent;
  color: currentColor;
}
</style>
