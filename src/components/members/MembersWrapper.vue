<template>
  <div>
    <SearchMembers />
    <MembersList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MembersList from "./MembersList.vue";
import SearchMembers from "./MembersSearch.vue";

export default Vue.extend({
  name: "MembersWrapper",
  components: {
    MembersList,
    SearchMembers,
  },
});
</script>
