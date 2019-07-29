<template>
  <v-container>
    <v-dialog v-model="loading" fullscreen full-width>
      <v-container fluid fill-height style="background-color: rgba(0, 0, 0, 0.5);">
        <v-layout justify-center align-center>
          <v-progress-circular
            v-show="this.loading"
            :size="70"
            :width="7"
            color="#252aff"
            indeterminate
          ></v-progress-circular>
        </v-layout>
      </v-container>
    </v-dialog>
    <v-layout align-start justify-center row>
      <v-flex xs12>
        <v-text-field
          solo
          autofocus
          append-icon="search"
          color="#252aff"
          label="Search"
          v-model="searchText"
          @click:append="doSearch"
          @keyup.enter="doSearch"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import Md5 from "md5";
export default {
  data: () => ({
    searchText: "",
    loading: false
  }),
  mounted: {},
  methods: {
    doSearch: function() {
      console.log(process.env.VUE_APP_API);
      this.loading = true;
      const hashForURI = Md5(
        "1" + process.env.VUE_APP_PRIVATE_KEY + process.env.VUE_APP_PUBLIC_KEY
      );
      axios
        .get(
          process.env.VUE_APP_API +
            "?ts=1&apikey=" +
            process.env.VUE_APP_PUBLIC_KEY +
            "&hash=" +
            hashForURI +
            "&nameStartsWith=" +
            this.searchText
        )
        .then(res => {
          this.loading = false;
          console.log("resultado");
          console.log(res);
        });
    }
  }
};
</script>
