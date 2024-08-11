export const useWebsiteStore = defineStore("websiteStore", {
  state: () => {
    return {
      data: ["forkdd"],
    };
  },

  actions: {
    async fetch() {
      // const infos = await $fetch('https://api.nuxt.com/modules/pinia')

      this.data = ["foo", "bar"];
    },
  },
});
