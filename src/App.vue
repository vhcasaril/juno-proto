<template>
  <v-app>
    <Header />
    <v-content class="background-panel">
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data: () => ({
    //
  })
};
</script>
<style>
</style>