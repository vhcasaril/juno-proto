<template>
  <v-container class="page">
    <SearchInput />
    <List />
  </v-container>
</template>

<script>
import SearchInput from "../components/SearchInput";
import List from "../components/List";

export default {
  components: {
    SearchInput,
    List
  }
};
</script>
