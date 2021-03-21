<template>
  <div class="home">
    <app-header></app-header>
    <v-row class="form-content">
      <v-col cols="12" sm="12" md="6">
        <div class="banner-form">
          <h2 class="contact-header">
            Powering Businesses and Startups across the Globe
          </h2>
          <p>
            With our well defined interface, our api are created specifically to
            bridge the gap between businesses and their customers, Our mission
            is to help businesses become profitable and improve interaction with
            their customers/users.
          </p>
        </div>
      </v-col>
    </v-row>
    <div class="section-2"></div>

    <app-footer></app-footer>
  </div>
</template>

<style src="../App.css" scoped></style>
<script>
import Header from "../components/Site/header3";
import Footer from "../components/Site/footer";
export default {
  name: "Home",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.end-header {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 20px;
}
.end-sub {
  font-size: 15px;
}
.team-div {
  text-align: center;
}
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

.section-2 {
  background-position: bottom;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  height: 400px;
}

.section-3 {
  text-align: center;
  padding: 50px;
}
.section-3-header {
  font-size: 28px;
  color: #311342;
  font-weight: 600;
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