import { defineStore } from 'pinia';

export const useTabStore = defineStore('tab', {
  state: () => ({
    currentTab: "",
    currentSideBarTab: "",
    screenWidth: 0,
  }),
  actions: {
  },
});