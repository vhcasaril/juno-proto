<template>
  <v-app>
    <Header />
    <v-content>
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
@import "https://raw.githubusercontent.com/daneden/animate.css/master/animate.css";


</style>