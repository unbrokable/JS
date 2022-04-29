import ax from "axios";

export const axios = ax;

export default {
  install(Vue: any, options: any) {
    Vue.prototype.$axios = ax;
  },
};
