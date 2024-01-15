<template lang="">
  <header>
    <h1>{{ title }}</h1>
    <button v-on:click="changeTitle">Child Titleyi değiştir</button>
  </header>
</template>

<script>
export default {
  // props: {
  //   title: {
  //     type: String,
  //     required: true,
  //   },
  // },
  props: ["title"],
  data() {
    return {
      liste: ["Anasayfa", "Hakkımızda", "Bolg", "İletişim"],
    };
  },
  methods: {
    changeTitle: function () {
      this.title = "Başlık Değişti";
    },
  },
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
