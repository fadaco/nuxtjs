<template>
  <v-app class="app">
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<style scoped>
.app {
  font-family: "Nunito Sans", sans-serif;
}
</style>

<script>
export default {
  head: {
    script: [
      {
        src="jquery.min.js",
        type: "text/javascript"
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
      },
      {
        rel: 'stylesheet',
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
      },
      {
        rel: 'stylesheet',
        href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
      },
    ]
  }
}
