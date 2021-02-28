<template>
  <div class="detail-wrapper">
    <div class="member-image">
      <img :src="member.avatar_url" alt="" />
    </div>
    <div class="member-info">
      <h2>{{ member.login }}</h2>
      <h4>{{ member.id }}</h4>
      <router-link to="/">return to list</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { memberService } from "@/services/members";
import { MemberEntity } from "@/types";
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    member: {} as MemberEntity,
  }),
  computed: {
    id(): string {
      return String(this.$route.params.login);
    },
  },
  created() {
    memberService
      .getMember(this.id)
      .then((member: MemberEntity | undefined) => {
        if (member) {
          this.member = member;
        }
      });
  },
});
</script>

<style lang="scss" scoped>
.detail-wrapper {
  margin: 1%;
}

.member-image {
  text-align: center;
}

.member-info {
  text-align: center;
}
</style>
