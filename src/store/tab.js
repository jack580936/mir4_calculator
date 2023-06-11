import { defineStore } from 'pinia';

export const useTabStore = defineStore('tab', {
  state: () => ({
    currentTab: "",
    currentRequestTab: "",
    currentMapTab: "",
  }),
  actions: {
  },
});