<template lang="">
  <header>
    <h1>Sayfamızın Başlığı</h1>
  </header>
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
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
