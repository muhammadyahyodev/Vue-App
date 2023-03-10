<template lang="">
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new category
      </h2>
      <form action="#" @submit="addCategory">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Enter category name</label
            >
            <input
              v-model="categoryName"
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter full name"
              required=""
            />
          </div>
        </div>
        <button
          type="submit"
          class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Add New Category
        </button>
      </form>
    </div>
  </section>
</template>
<script>
import { toast } from "vue3-toastify";

export default {
  name: "AddCategory",
  data() {
    return {
      categoryName: "",
    };
  },

  methods: {
    addCategory(e) {
      e.preventDefault();

      if (this.categoryName) {
        this.$store
          .dispatch("ADD_CATEGORY", this.categoryName, {
            title: this.categoryName,
          })
          .then((response) => {
            if (response.status == 201) {
              toast.success(`Added new category`);
              this.categoryName = "";
            } else {
              console.log("Not found");
            }
          });
      } else {
        toast.warning("Fill category input ...");
      }
    },
  },

  mounted() {},

  computed: {},
};
</script>
<style></style>
