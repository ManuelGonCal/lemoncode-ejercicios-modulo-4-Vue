<template>
  <div class="list-page">
    <MembersList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MembersList from "@/components/MembersList.vue";

export default Vue.extend({
  name: "Home",
  components: {
    MembersList,
  },
});
</script>
