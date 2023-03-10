import { createStore } from "vuex";
import { auth } from "./modules/auth/auth";
import { admin } from "./modules/admin/createadmin";
import { category } from "./modules/category/createCategory";

const store = createStore({
  modules: {
    auth,
    admin,
    category,
  },
});

export default store;
