<template lang="">
  <header>
    <h1>{{ title }}</h1>
    <button v-on:click="changeTitle">Child Titleyi değiştir Butonu</button>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  // props: ["title"],
  data() {
    return {
      liste: ["Anasayfa", "Hakkımızda", "Bolg", "İletişim"],
    };
  },

  // $emit iki parametre alır. Birincisi: Parant'da karşılanacak string-Key, İkincisi: Gönderilen Eleman.

  methods: {
    changeTitle: function () {
      this.$emit(
        "basligiDegistir",
        "Alt Bileşen Tarafından Değiştirilen Başlık"
      );
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
