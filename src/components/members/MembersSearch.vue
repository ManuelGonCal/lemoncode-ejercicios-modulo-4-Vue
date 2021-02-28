<template>
  <div class="search-wrapper">
    <form @submit.prevent>
      <v-text-field
        v-model="corpToSearch"
        label="Corp Name"
        class="search-input"
        @keyup.enter="searchMembers"
      />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "searchMembers",
  data: () => ({
    corpToSearch: "lemoncode",
  }),
  methods: {
    searchMembers() {
      this.$emit("input-corp", this.corpToSearch);
    },
  },
});
</script>

<style lang="scss" scoped>
.search-wrapper {
  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.search-input {
  max-width: 300px;
}
</style>
