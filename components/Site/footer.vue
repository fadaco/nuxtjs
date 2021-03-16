<template>
  <div>
    <div class="section-info">
      <span style="margin-right: 20px"
        ><v-icon color="#2D0308" style="margin-right: 10px">mdi-gmail</v-icon
        >hello@orion5.com</span
      >
      <span
        ><v-icon color="#2D0308" style="margin-right: 10px">mdi-phone</v-icon
        >+234 8186990513</span
      >
    </div>
    <div class="footer">
      <div class="contain">
        <div class="col">
          <h1>Quick Links</h1>
          <ul>
            <li v-for="(link, index) in quickLinks" :key="index">
              <nuxt-link class="footer-link" :to="link.link">
                {{ link.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="col">
          <h1>Developers</h1>
          <ul>
            <li v-for="(link, index) in developersLink" :key="index">
              <nuxt-link class="footer-link" :to="link.link">
                {{ link.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="col">
          <h1>Privacy & Terms</h1>
          <ul>
            <li v-for="(link, index) in others" :key="index">
              <a class="footer-link" target="_blank" :href="link.link">
                {{ link.name }}</a
              >
            </li>
          </ul>
        </div>

        <div class="col-large">
          <div class="social-media">
            <p>CONNECT WITH US</p>
            <a target="_blank"
              ><v-icon
                style="font-size: 20px; margin-right: 10px"
                color="white"
                dark
                >mdi-facebook</v-icon
              ></a
            >
            <a target="_blank"
              ><v-icon
                style="font-size: 20px; margin-right: 10px"
                color="white"
                dark
                >mdi-twitter</v-icon
              ></a
            >
            <a target="_blank"
              ><v-icon
                style="font-size: 20px; margin-right: 10px"
                color="white"
                dark
                >mdi-instagram</v-icon
              ></a
            >
          </div>
        </div>

        <div class="clearfix"></div>
      </div>
    </div>
    <v-card-actions style="margin: 0" class="footer-2">
      <div><nuxt-link class="footer-home-link" to="/"> FEDAM </nuxt-link></div>
      <v-spacer></v-spacer>
      <div>Privacy & Cookies | Terms and Conditons</div>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      developersLink: [
        { name: "Videos", link: "#" },
        { name: "Documentation", link: "/developers" },
        { name: "Integration Tutorials", link: "#" },
      ],
      quickLinks: [
        { name: "Pricing", link: "/pricing" },
        { name: "About us", link: "/about" },
        { name: "Contact us", link: "/contact" },
      ],
      others: [
        {
          name: "Privacy",
          link:
            "https://www.privacypolicies.com/live/755fe8e5-869e-469f-85b5-85fe463ce83a",
        },
        {
          name: "Cookies",
          link:
            "https://www.privacypolicies.com/live/6238a092-3639-41fc-85c6-e00e91ba3c95",
        },
        {
          name: "Terms and Condition",
          link:
            "https://www.privacypolicies.com/live/6382ed9f-ac60-4dc1-a2e8-aeea04a8fa23",
        },
      ],
    };
  },
};
</script>


<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
.footer-home-link {
  color: #fafafa;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
}

.footer-link {
  text-decoration: none;
  color: #fafafa;
}

.footer-2 {
  background: #80202c;
  padding: 20px 50px;
  color: white;
  width: 100vw;
  font-size: 13px;
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

/* STYLES SPECIFIC TO FOOTER  */
.footer {
  width: 100vw;
  position: relative;
  height: 300px;
  background-color: #2d0308;
  padding: 20px;
}
.footer .col {
  width: 18.3%;
  height: auto;
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0px 20px 20px 20px;
}
.footer .col-large {
  text-align: right;
  width: 45%;
  height: auto;
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0px 20px 20px 20px;
}
.footer .col-large h1 {
  margin-bottom: 10px;
  padding: 0;
  font-family: inherit;
  font-size: 13px;
  line-height: 17px;
  padding: 20px 0px 5px 0px;
  color: rgb(255, 255, 255);
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.25em;
}
.footer .col-large p {
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: 13px;
  line-height: 17px;
  padding: 20px 0px 5px 0px;
  color: rgb(255, 255, 255);
  letter-spacing: 0.1em;
}
.footer .col h1 {
  margin-bottom: 20px;
  padding: 0;
  font-family: inherit;
  font-size: 13px;
  line-height: 17px;
  padding: 20px 0px 5px 0px;
  color: rgb(255, 255, 255);
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.25em;
}
.footer .col ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.footer .col ul li {
  color: #f5f5f5;
  font-size: 13px;
  font-family: inherit;
  padding: 5px 0px 5px 0px;
  cursor: pointer;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
}
.social ul li {
  display: inline-block;
  padding-right: 5px !important;
}

.footer .col ul li:hover {
  color: #df3b3b;
  transition: 0.1s;
  -webkit-transition: 0.1s;
  -moz-transition: 0.1s;
}
.clearfix {
  clear: both;
}
.store {
  color: white;
}
.social-media {
  color: white;
}
.social-media-store {
  padding: 0 5%;
}

.footer-bottom-div {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  text-align: center;
  display: block;
  color: white;
  background: #252525;
  height: 70px;
  &-text {
    line-height: 70px;
  }
}

@media only screen and (min-width: 1280px) {
  .contain {
    width: 1200px;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 1139px) {
  .contain .social {
    width: 1000px;
    display: block;
  }
  .social h1 {
    margin: 0px;
  }
}
@media only screen and (max-width: 950px) {
  .footer {
    width: 100%;
    position: relative;
    height: auto;
    background-color: #2d0308;
    padding: 20px;
  }
  .footer .col {
    width: 33%;
  }
  .footer .col h1 {
    font-size: 14px;
  }
  .footer .col ul li {
    font-size: 13px;
  }
}
@media only screen and (max-width: 500px) {
  .footer-2 {
    background: #80202c;
    padding: 20px 10px;
    color: white;
    font-size: 13px;
  }

  .footer .col-large {
    text-align: left;
    width: 100%;
  }
  .footer {
    width: 100%;
    position: relative;
    height: auto;
    background-color: #2d0308;
    padding: 20px;
  }
  .footer .col {
    width: 100%;
  }
  .footer .col h1 {
    font-size: 14px;
  }
  .footer .col ul li {
    font-size: 13px;
  }
}
@media only screen and (max-width: 340px) {
  .footer-2 {
    background: #80202c;
    padding: 20px 10px;
    color: white;
    font-size: 13px;
  }
  .footer {
    width: 100%;
    position: relative;
    height: auto;
    background-color: #2d0308;
    padding: 20px;
  }
  .footer .col {
    width: 100%;
  }

  .footer .col-large {
    text-align: left;
    width: 100%;
  }
}
</style>
