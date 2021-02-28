<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            Id
          </th>
          <th class="text-center">
            Image
          </th>
          <th class="text-center">
            Login
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in memberList" :key="member.id" class="text-center">
          <td>{{ member.id }}</td>
          <td><img :src="member.avatar_url" alt="" class="avatar-img" /></td>
          <td>{{ member.login }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { memberService } from "@/services/members";
import { MemberEntity } from "@/types";
import Vue from "vue";

export default Vue.extend({
  name: "MembersList",
  data() {
    return {
      memberList: [] as MemberEntity[],
    };
  },
  async created() {
    this.memberList = await memberService.get();
  },
});
</script>

<style lang="scss" scoped>
.avatar-img {
  width: 100px;
}
</style>
