<template>
  <div>
    <v-toolbar color="#252aff">
      <v-btn @click="$router.go(-1)" v-if="['Details'].includes($route.name)" icon class="white--text">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">Juno
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    showBackArrow: false
  }),
  computed: {},
  methods: {
     goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
