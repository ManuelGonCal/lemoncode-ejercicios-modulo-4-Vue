<template>
  <div>
    <v-simple-table v-if="memberList.length > 0">
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
            <td class="normalized-column">{{ member.id }}</td>
            <td class="normalized-column">
              <img :src="member.avatar_url" alt="" class="avatar-img" />
            </td>
            <td class="normalized-column">
              <router-link :to="`detail/${member.login}`">
                {{ member.login }}
              </router-link>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="empty-list" v-else>
      <h1>There is no Members for that Corporation</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { memberService } from "@/services/members";
import { MemberEntity } from "@/types";
import Vue from "vue";

export default Vue.extend({
  name: "MembersList",
  props: {
    corporationName: {
      type: String,
      default: "lemoncode",
    },
  },
  data: () => ({
    memberList: [] as MemberEntity[],
  }),
  async created() {
    this.memberList = await memberService.get();
  },
  watch: {
    corporationName: async function(newCorp) {
      this.memberList = await memberService.getByName(newCorp);
    },
  },
});
</script>

<style lang="scss" scoped>
.avatar-img {
  width: 100px;
}
.empty-list {
  margin-top: 100px;
  text-align: center;
}

.normalized-column {
  width: 33%;
}
</style>
