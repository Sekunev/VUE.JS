<template>
  <div>
    <p><deneme></deneme></p>
    <!--! "v-bind" yerine -->
    ":" -->

    <a :target="target" :href="link">Webtangular'a Git</a>
    <!--! "v-on" yerine -->
    "@"-->

    <p><button @click="guncelle">Link'i Güncelle</button></p>
  </div>
</template>

<script>
import deneme from "./components/deneme.vue";

export default {
  components: {
    deneme: deneme,
  },
  data() {
    return {
      link: "",
      target: "",
    };
  },
  methods: {
    guncelle() {
      this.link = "https://webtangular.com";
      this.target = "_blank";
    },
  },
};
</script>

<style scoped></style>
