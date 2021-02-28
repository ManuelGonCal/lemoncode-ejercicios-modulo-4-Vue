<template>
  <div class="members-wrapper">
    <SearchMembers @input-corp="updateCorp" />
    <MembersList :corporationName="corporation" />
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
  data() {
    return {
      corporation: "lemoncode",
    };
  },
  methods: {
    updateCorp(corp: string) {
      this.corporation = corp;
    },
  },
});
</script>

<style lang="scss" scoped>
.members-wrapper {
  margin: 1%;
}
</style>
