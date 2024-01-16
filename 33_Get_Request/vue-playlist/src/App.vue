<template>
  <!-- <blog-app /> -->
  <show-blogs />
</template>

<script>
// import formOne from "./components/form-one.vue";
import blogApp from "./components/blog-app.vue";
import showBlogs from "./components/show-blogs.vue";

export default {
  components: {
    "blog-app": blogApp,
    "show-blogs": showBlogs,
  },
  data() {
    return { component: "form-two" };
  },
};
</script>
<style scoped></style>
