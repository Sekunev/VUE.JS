<template lang="">
  <footer>
    <p>{{ copyright }} - {{ year }}</p>
    <p>{{ title }}</p>
  </footer>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      copyright: "Tüm Hakları Saklıdır. (c)",
      year: 2024,
    };
  },
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
