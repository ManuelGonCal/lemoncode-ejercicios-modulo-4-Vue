<template>
  <div class="search-wrapper">
    <form @submit.prevent>
      <v-text-field
        label="Corp Name"
        value="Lemoncode"
        class="search-input"
        @keyup.enter="searchMembers"
        ref="searchCorp"
      />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "searchMembers",
  methods: {
    searchMembers(event: KeyboardEvent) {
      console.log(event);
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
