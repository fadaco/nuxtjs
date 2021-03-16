<template>
  <div class="home">
    <app-header></app-header>
    <v-row
      v-if="$fetchState.pending"
      class="form-content text-center calculator-card"
    >
      <p>Fetching Price list...</p>
    </v-row>
    <v-row v-else-if="$fetchState.error" class="form-content text-center">
      <p>An error occurred :</p>
    </v-row>
    <div v-else>
      <v-row class="form-content">
        <v-col cols="12" style="max-height: 217px">
          <div class="banner-form text-center">
            <h2 class="contact-header">Pay as you go</h2>
            <p class="display-1"></p>
            <p class="">
              Simple, fair pricing, <br />
              We only charge when your sms is successful
            </p>
          </div>
        </v-col>

        <v-col class="mt-140">
          <v-select
            class="my-select"
            v-model="selectedPrice"
            :items="prices"
            menu-props="auto"
            label="Select Destination country"
            return-object
            dense
            @change="showActivePrice($event)"
            item-text="name"
            item-value="id"
            prepend-icon="mdi-map"
          ></v-select>

          <v-card
            v-if="prices && prices.length"
            class="mx-auto"
            max-width="500"
            height="218"
          >
            <v-card-text v-if="activePrice">
              <div>Price details for</div>
              <br />
              <p class="contact-header text--primary">{{ activePrice.name }}</p>

              <div class="text--primary">
                We charge <span class="">#{{ activePrice.price }}</span> for a
                page of sms send to
                <span class="text-capitalize">{{ activePrice.name }}</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="#6338b2"
                class="text-capitalize"
                @click="reveal = true"
              >
                Use our calculator
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%"
              >
                <v-card-text class="pb-0">
                  <div class="calculator-card">
                    <v-col cols="4">
                      <span>Number of pages<br /></span>
                      <v-text-field
                        v-model="numOfPages"
                        :rules="numOfPagesRules"
                        dense
                        autofocus
                        solo
                        type="number"
                        hint="Number of pages"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="4">
                      <span
                        >Cost per page <br />
                        {{ activePrice.price }}
                      </span>
                    </v-col>

                    <v-col cols="4">
                      <span
                        >Total cost <br />
                        {{ activePrice.price * numOfPages }}
                      </span>
                    </v-col>
                  </div>
                </v-card-text>
                <br />
                <v-card-actions class="">
                  <v-btn
                    bottom
                    right
                    text
                    color="#6338b2"
                    @click="reveal = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>

          <!-- error card -->
          <v-card
            v-else
            class="mx-auto calculator-card"
            max-width="500"
            height="120"
          >
            <div class="warning-color">
              <v-icon color="#2d0308" class="icon">mdi-alert-circle</v-icon>
              <br />
              <small class="h6">
                Sorry, We could not fetch prices at this time
              </small>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<style src="../App.css" scoped></style>

<script>
import Header from "../components/Site/header3";
import Footer from "../components/Site/footer";
import { ApiEndpoints } from "../shared/endpoints";
import { SERVER_REQUEST } from "../shared/backend";

export default {
  name: "PRICING",
  // fetchOnServer: false,
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },

  async fetch() {
    let countries = await SERVER_REQUEST(
      this,
      ApiEndpoints.FETCH_COUNTRY_WITH_PRICE
    );
    return this.$store.commit("countries/setCountries", countries.data);
  },

  methods: {
    showActivePrice(priceObject) {
      return (this.selectedPrice = priceObject);
    },
  },

  computed: {
    prices() {
      return this.$store.state.countries.countries;
    },

    defaultPrice() {
      if (!this.prices || !this.prices.length) return {};
      let price = this.prices.filter(
        (price) => price.phonecode == this.defaultPricePhoneCode
      );
      return price[0];
    },

    activePrice() {
      return this.selectedPrice.id ? this.selectedPrice : this.defaultPrice;
    },
  },

  data() {
    return {
      numOfPages: 1,
      reveal: false,
      showPrice: true,
      selectedPrice: {},
      defaultPricePhoneCode: "234",
      numOfPagesRules: [
        (v) => !!v || "Number of pages is required",
        (v) => !!v >= 1 || "Number of pages must be greater than 1",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.form-content {
  margin: 10px 0;
  height: 88vh;
  align-items: center;
  background: #a88fd60a;
}

.width40 {
  width: 40px;
}

.warning-color {
  color: #2d0308;
}

.calculator-card {
  display: flex;
  padding: 20px 0 0 0;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.mt-140 {
  margin-top: -140px;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.my-select {
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 40px;
}

.my-select {
  text-transform: capitalize;
}

.img-div2 {
  border-radius: 0 0 100px 100px;
  text-align: center;
  padding: 70px 0 0 0;
  background: #6338b2;
  position: relative;
}

.primary-color {
  color: #a599bd;
}

.img-div {
  padding: 60px 0 0 0;
}
.contact-header {
  font-size: 30px;
  margin-bottom: 20px;
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
