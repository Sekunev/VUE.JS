<template>
  <h1>Bu Root (App.vue) Component Başlığı</h1>
  <app-header />
  <app-footer />
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
h1 {
  color: red;
}
</style>
