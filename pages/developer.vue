<template>
  <div>
    <app-header></app-header>
    <br />
    <v-row class="form-content mb50">
      <doc-view></doc-view>
    </v-row>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css";
import Footer from "../components/Site/footer";
import Header from "../components/Site/header3";
import DocView from "../components/Documentation/DocView";

export default {
  name: "documentaion",
  components: {
    "app-header": Header,
    "doc-view": DocView,
    "app-footer": Footer,
  },
  data() {
    return {
      drawer: true,
      mini: false,
    };
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>


<style src="../App.css" scoped></style>
<style scoped>
.mt30 {
  margin-top: 30px;
}

.mb50 {
 overflow: hidden !important;
}
</style>
