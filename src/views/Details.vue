<template>
  <v-container >
    <v-layout  column justify-center align-center>
        <h2 class="ma-3">{{ this.GET_ITEM_DETAILS.name }}</h2>
        <v-img max-width="500" max-height="500" :src="returnImg()" width="400" ></v-img>
    </v-layout>
    <v-layout row justify-center align-center class="ma-5">
        <v-flex  xl6 lg6 md8 sm12 xs12 >
          <v-expansion-panels focusable accordion multiple>
          <v-expansion-panel
          >
            <v-expansion-panel-header  class="title">Description</v-expansion-panel-header>
            <v-expansion-panel-content class="mt-3 body-1">
              <h3 class="ml-3  body-1">{{ this.GET_ITEM_DETAILS.description }}</h3>
            </v-expansion-panel-content>
          </v-expansion-panel>
             <v-expansion-panel
          >
            <v-expansion-panel-header class="title">Appearences</v-expansion-panel-header>
            <v-expansion-panel-content class="mt-3 body-1">
             <h3 class="ml-3 body-1">Comics: {{ this.GET_ITEM_DETAILS.comics.available }}</h3>
          <h3 class="ml-3 mt-1 body-1">Series: {{ this.GET_ITEM_DETAILS.series.available }}</h3>
          <h3 class="ml-3 mt-1 body-1">Stories: {{ this.GET_ITEM_DETAILS.stories.available }}</h3>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
          <!-- <h2 class="ml-3 title">Description</h2>
          <h3 class="ml-3  body-1">{{ this.GET_ITEM_DETAILS.description }}</h3>
          <h2 class="ml-3 mt-3 title">Appearences</h2>
          <h3 class="ml-3 body-1">Comics: {{ this.GET_ITEM_DETAILS.comics.available }}</h3>
          <h3 class="ml-3 mt-1 body-1">Series: {{ this.GET_ITEM_DETAILS.series.available }}</h3>
          <h3 class="ml-3 mt-1 body-1">Stories: {{ this.GET_ITEM_DETAILS.stories.available }}</h3> -->
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {
  },
   data: () => ({}),
  computed: {
    ...mapGetters(["GET_ITEM_DETAILS"])
  },
  methods: {
    returnImg: function() {
      console.log(this.GET_ITEM_DETAILS)
      const thumbnailValue = this.GET_ITEM_DETAILS.thumbnail;
      return `${thumbnailValue.path}.${thumbnailValue.extension}`;
    }
  }
};
</script>

<style>
.v-image {
  border-radius: 5px;
}
.background-panel{
  background-color:#F5F5F6;
  box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);
}

@media (max-width: 500px) {
  .v-image {
    max-width: 300px !important;
  }
}

</style>