<template>
  <blog-app />
</template>

<script>
// import formOne from "./components/form-one.vue";
import blogApp from "./components/blog-app.vue";

export default {
  components: {
    "blog-app": blogApp,
  },
  data() {
    return { component: "form-two" };
  },
};
</script>
<style scoped></style>
