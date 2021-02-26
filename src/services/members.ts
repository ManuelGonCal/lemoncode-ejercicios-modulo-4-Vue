import { MemberEntity } from "@/types";

export const memberService = {
  async get(): Promise<MemberEntity[]> {
    const members: MemberEntity[] = await fetch(
      `https://api.github.com/orgs/lemoncode/members`
    ).then((response) => response.json());

    return members;
  },

  async getByName(corpName: string): Promise<MemberEntity[]> {
    const members: MemberEntity[] = await fetch(
      `https://api.github.com/orgs/${corpName}/members`
    ).then((response) => response.json());

    return members;
  },
};
