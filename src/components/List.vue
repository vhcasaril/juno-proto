<template>
  <v-container>
    <v-layout row align-start justify-center>
      <v-flex xl6 lg6 md8 sm12 xs12>
        <v-list three-line v-if="listSorted.length > 0">
          <template v-for="item in listSorted">
            <v-list-item :key="item.name" @click="routeToDetails(item)">
              <v-list-item-avatar size="80">
                <v-img :src="returnImgPath(item)"></v-img>
              </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    <b>{{item.name}}</b>
                  </v-list-item-title>
                  <v-list-item-subtitle v-if="item.description.length > 0">
                    {{item.description}}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    Description Not Available
                  </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["GET_SEARCH_LIST"]),
    listSorted: function() {
      const sortedList = this.GET_SEARCH_LIST.sort((a, b) => {
        if (a.thumbnail.path.includes("image_not_available")) {
          return 1;
        } else {
          return -1;
        }
      });
      
      return sortedList;
    }
  },
  methods: {
    returnImgPath: function(oItem) {
      const thumbnailValue = oItem.thumbnail;
      return `${thumbnailValue.path}.${thumbnailValue.extension}`;
    },
    
    routeToDetails:function(oItem) {
      this.$store.dispatch("setDetailsOfItem", oItem).then(() => {
        this.$router.push({name: "Details"});
      });
    }
    
  }
};
</script>

<style>
</style>
