<template lang="">
  <h1>Bu İç (Header) Component Başlığı</h1>
  <ul>
    <li v-for="eleman in liste">
      {{ eleman }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      liste: ["Anasayfa", "Hakkımızda", "Bolg", "İletişim"],
    };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
li {
  color: rgb(115, 65, 165);
  font-size: large;
}
</style>
