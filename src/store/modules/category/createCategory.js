import axios from "@/service/axios.js";
const token = window.localStorage.getItem("token");

export const category = {
  state: () => ({ authMessage: "" }),

  mutations: {
    SET_MESSAGES(state, payload) {
      state.authMessage = payload;
    },
  },

  actions: {
    ADD_CATEGORY: async ({ commit }, payload) => {
      try {
        const response = await axios.post("/category", payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        commit("SET_MESSAGES", "");

        return response;
      } catch (err) {
        console.log(err);
        commit("SET_MESSAGES", err.response.data.message);
      }
    },
  },
};
