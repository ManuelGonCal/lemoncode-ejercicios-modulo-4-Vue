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
  data: () => ({
    corporation: "lemoncode",
  }),
  mounted() {
    if (localStorage.corporation) {
      console.log(this.corporation, localStorage);
      this.corporation = localStorage.corporation;
    }
  },
  methods: {
    updateCorp(corp: string) {
      this.corporation = corp;
      this.persist();
    },
    persist() {
      localStorage.corporation = this.corporation;
    },
  },
});
</script>

<style lang="scss" scoped>
.members-wrapper {
  margin: 1%;
}
</style>
