<template>
  <div class="home">
    <app-header></app-header>
    <v-row class="form-content">
      <v-col cols="12" sm="12" md="6" class="hidden-md-and-up">
        <div class="img-div2">
          <h2 style="color: white">Contact Us</h2>
          <img
            style="position: absolute; bottom: 0; left: 20%"
            width="70%"
            src=".././assets/contact-2.svg"
            alt=""
          />
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <div class="banner-form">
          <h2 class="contact-header">Get in touch with us</h2>
          <div v-if="getContact.message === 'success'">submitted!!</div>
          <v-text-field
            style="height: 70px"
            color="#180A35"
            v-model="contact.name"
            label="Name"
            placeholder="Lorem"
            outlined
          ></v-text-field>
          <v-text-field
            style="height: 70px"
            v-model="contact.email"
            color="#180A35"
            label="Email Address"
            placeholder="Lorem"
            outlined
          ></v-text-field>
          <v-text-field
            style="height: 70px"
            v-model="contact.title"
            color="#180A35"
            label="Subject"
            placeholder="Lorem"
            outlined
          ></v-text-field>
          <v-textarea
            outlined
            name="input-7-4"
            label="Message"
            v-model="contact.message"
            value="Type here"
          ></v-textarea>
          <v-btn
            class="sanitize banner-btn"
            color="#FAA722"
            x-large
            depressed
            dark
            block
            @click="sendContact"
          >
            Send
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="6" class="hidden-sm-and-down">
        <div class="img-div">
          <img width="140%" src=".././assets/contact.svg" alt="" />
        </div>
      </v-col>
    </v-row>
    <app-footer></app-footer>
  </div>
</template>

<style src="../App.css" scoped></style>
<script>
import { mapGetters } from "vuex";
import Header from "../components/Site/header3";
import Footer from "../components/Site/footer";
export default {
  name: "Home",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        title: "",
        message: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      getContact: "contact/getContact",
    }),
  },
  methods: {
    async sendContact() {
      await this.$store.dispatch("contact/submitContact", this.contact);
      this.contact.name = this.contact.email = this.contact.title = this.contact.message =
        "";
    },
  },
};
</script>

<style lang="scss" scoped>
.img-div2 {
  border-radius: 0 0 100px 100px;
  text-align: center;
  padding: 70px 0 0 0;
  background: #6338b2;
  position: relative;
}
.img-div {
  padding: 60px 0 0 0;
}
.contact-header {
  font-size: 30px;
  margin-bottom: 20px;
}
.banner-form {
  padding: 60px 140px;
}
.section-info {
  background: #fbd6db;
  padding: 20px;
  text-align: center;
}

@media (max-width: 991px) {
}
@media (max-width: 767px) {
  .section-info {
    background: #fbd6db;
    padding: 10px;
    text-align: center;
  }
}
@media (max-width: 479px) {
  .img-div2 {
    border-radius: 0 0 50px 50px;
    text-align: center;
    padding: 70px 0 0 0;
    background: #6338b2;
    height: 300px;
  }
  .img-div {
    padding: 60px 0 0 0;
  }
  .contact-header {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .banner-form {
    padding: 20px 20px;
  }
  .section-info {
    background: #fbd6db;
    padding: 20px 0;
    text-align: center;
  }
}
</style>
