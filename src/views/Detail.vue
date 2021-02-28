<template>
  <div>
    {{ member.id }}
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

<style></style>
