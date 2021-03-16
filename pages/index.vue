<template>
  <div class="home">
    <app-header></app-header>

    <div class="section-2">
      <h4 class="section-2-header">Increase your productivity in four steps</h4>
      <div>
        <v-row>
          <v-col
            v-for="(message, index) in joinUsMessages"
            :key="index"
            cols="12"
            sm="12"
            md="3"
          >
            <v-card color="transparent" class="section-2-card text-center" flat>
              <v-icon
                class="text-center"
                style="font-size: 30px; margin: 20px auto"
                >{{ message.icon }}</v-icon
              >
              <h3 style="margin-bottom: 10px">{{ message.title }}</h3>
              <p style="font-size: 13px">{{ message.message }}</p>
              <v-btn
                small
                text
                :href="message.actionLink"
                class="text-capitalize"
                color="#6d0c17"
              >
                {{ message.actionWord }}
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="section-3">
      <v-row>
        <v-col class="section-3-col" cols="12" sm="12" md="6">
          <img
            style="box-shadow: 0 17px 38px -11px rgba(0, 0, 0, 0.18)"
            width="100%"
            src=".././assets/section3.png"
            alt="section3"
          />
        </v-col>
        <v-col class="section-3-col" cols="12" sm="12" md="6">
          <h1 class="section-3-header">Powerful Minimalistic Dashboard</h1>
          <p class="section-3-sub">
            Track all your businesses and communication channels at a glance with our intuitive dashboard.
          </p>
          <br />
          <v-btn
            style="margin-top: -20px"
            href="user/overview"
            class="sanitize"
            text
            color="#FAA722"
            >Explore More
            <v-icon color="#FAA722">mdi-arrow-right</v-icon></v-btn
          >
        </v-col>
      </v-row>
    </div>

    <div class="section-4">
      <div class="section-4-heading">
        <h2 class="section-4-header">What people think about us</h2>
        <v-row>
          <v-col
            v-for="(message, index) in whatPeopleThink"
            :key="index"
            cols="12"
            sm="12"
            md="4"
          >
            <v-card color="transparent" class="section-2-card text-center" flat>
              <v-icon
                class="text-center"
                style="font-size: 30px; margin: 20px auto"
                >mdi-account-circle</v-icon
              >
              <h4 style="margin-bottom: 10px">{{ message.title }}</h4>
              <p style="font-size: 13px">{{ message.message }}</p>
              <v-btn
                small
                text
                :href="message.actionLink"
                class="text-capitalize"
                color="#6d0c17"
              >
                {{ message.actionWord }}
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>

    </div>
    <app-footer></app-footer>
  </div>
</template>

<style src="../App.css" scoped></style>
<script>
import Header from "../components/Site/header";
import Footer from "../components/Site/footer";
export default {
  name: "Home",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  data() {
    return {
      joinUsMessages: [
        {
          icon: "mdi-account-plus-outline",
          message:
            "Get instant access to our range of services and boost your business productivity in seconds",
          actionLink: "Get started",
          actionWord: "Register",
          title: "Create an account",
        },
        {
          icon: "mdi-domain",
          message:
            "Create your business and configure your message templates or use the default template we've created for you",
          actionWord: "Business setup",
          actionLink: "/user/overview",
          title: "Set up your businesses",
        },
        {
          icon: "mdi-rocket-launch-outline",
          message:
            "Start building with our fluent APIS for your email, sms and OTP communications",
          actionWord: "Documenation",
          actionLink: "/developers",
          title: "Start Building",
        },
        {
          icon: "mdi-human-capacity-increase",
          message:
            "When you are ready to go live, fund your wallet and watch your productivity soar",
          actionWord: " Pricing",
          actionLink: "/pricing",
          title: "Experience business Growth",
        },
      ],
      whatPeopleThink: [
        {
          message:
            "Get instant acess to our range of service in with our single sign up process.It only take a second",
          title: "Ojo Oluwafunmi",
        },
        {
          message:
            "Get instant acess to our range of service in with our single sign up process.It only take a second",
          title: "John Lilian",
        },
        {
          message:
            "Get instant acess to our range of service in with our single sign up process.It only take a second",
          title: "Oke Theo",
        },

      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-category {
  padding: 100px;
}
.section-category-header {
  color: #6d0c17;
  font-size: 35px;
}
.section-category-sub {
  color: #80202c;
  font-size: 18px;
  width: 70%;
}
.section-category-card {
  height: 300px;
  padding: 30px;
  text-align: center;
}
.section-2 {
  padding: 50px 100px;
  background: #fbd6db;
}
.section-2-header {
  color: #6d0c17;
  font-size: 30px;
  margin-bottom: 20px;
}
.section-2-sub {
  color: #80202c;
  font-size: 18px;
  width: 70%;
}
.section-2-card {
  height: auto;
  padding: 10px;
  text-align: justify;
}
.section-3 {
  padding: 100px;
}
.section-3-header {
  width: 350px;
  color: #6d0c17;
  font-size: 35px;
  margin-bottom: 20px;
}
.section-3-sub {
  width: 350px;
  color: #80202c;
  font-size: 18px;
}
.section-3-col {
  padding: 30px;
}
.section-4 {
  text-align: center;
  padding: 100px;
  background: rgb(250, 250, 250);
}
.section-4-heading {
  width: 700px;
  margin: 0 auto;
}
.section-4-header {
  color: #6d0c17;
  font-size: 30px;
  margin-bottom: 20px;
}
.section-4-sub {
  color: #80202c;
  font-size: 15px;
}
.section-info {
  background: #fbd6db;
  padding: 20px;
  text-align: center;
}

@media (max-width: 991px) {
}
@media (max-width: 767px) {
  .section-category {
    padding: 20px;
  }
  .section-category-header {
    color: #6d0c17;
    font-size: 30px;
  }
  .section-category-sub {
    color: #80202c;
    font-size: 14px;
    width: auto;
  }
  .section-category-card {
    height: 300px;
    padding: 30px;
    text-align: center;
  }
  .section-2 {
    padding: 30px 20px;
    background: #fbd6db;
  }
  .section-2-header {
    color: #6d0c17;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .section-2-sub {
    color: #80202c;
    font-size: 14px;
    width: auto;
  }
  .section-2-card {
    height: auto;
    padding: 10px;
    text-align: justify;
  }
  .section-3 {
    padding: 20px;
  }
  .section-3-header {
    width: auto;
    color: #6d0c17;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .section-3-sub {
    width: auto;
    color: #80202c;
    font-size: 14px;
  }
  .section-3-col {
    padding: 20px;
  }
  .section-4 {
    text-align: center;
    padding: 20px;
    background: rgb(250, 250, 250);
  }
  .section-4-heading {
    width: auto;
    margin: 0;
  }
  .section-4-header {
    color: #6d0c17;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .section-4-sub {
    color: #80202c;
    font-size: 14px;
  }
  .section-info {
    background: #fbd6db;
    padding: 10px;
    text-align: center;
  }
}
@media (max-width: 479px) {
  .section-category {
    padding: 20px;
  }
  .section-category-header {
    color: #6d0c17;
    font-size: 30px;
  }
  .section-category-sub {
    color: #80202c;
    font-size: 14px;
    width: auto;
  }
  .section-category-card {
    height: 300px;
    padding: 30px;
    text-align: center;
  }
  .section-2 {
    padding: 30px 20px;
    background: #fbd6db;
  }
  .section-2-header {
    color: #6d0c17;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .section-2-sub {
    color: #80202c;
    font-size: 14px;
    width: auto;
  }
  .section-2-card {
    height: auto;
    padding: 10px;
    text-align: justify;
  }
  .section-3 {
    padding: 20px;
  }
  .section-3-header {
    width: auto;
    color: #6d0c17;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .section-3-sub {
    width: auto;
    color: #80202c;
    font-size: 14px;
  }
  .section-3-col {
    padding: 20px;
  }
  .section-4 {
    text-align: center;
    padding: 20px;
    background: rgb(250, 250, 250);
  }
  .section-4-heading {
    width: auto;
    margin: 0;
  }
  .section-4-header {
    color: #6d0c17;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .section-4-sub {
    color: #80202c;
    font-size: 14px;
  }
  .section-info {
    background: #fbd6db;
    padding: 20px 0;
    text-align: center;
  }
}
</style>
