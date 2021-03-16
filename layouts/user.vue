<template>
  <v-app class="app">
    <v-main>
      <div>
        <app-header></app-header>
        <v-row class="d-row" no-gutters>
          <v-col class="hidden-sm-and-down d-col-1" cols="12" sm="12" md="2">
            <app-leftmenu></app-leftmenu>
          </v-col>
          <nuxt />
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import LeftMenu from "../components/Dashboard/LeftMenu";
import Header from "../components/Dashboard/header";
export default {
  components: {
    "app-header": Header,
    "app-leftmenu": LeftMenu,
  },
};
</script>


<style src="../App.css" scoped></style>

<style lang="scss" scoped>
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

