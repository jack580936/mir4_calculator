import { defineStore } from 'pinia';

export const useTabStore = defineStore('tab', {
  state: () => ({
    currentTab: "",
    currentRequestTab: "",
    currentMysteryTab: "",
    currentMapTab: "",
  }),
  actions: {
  },
});