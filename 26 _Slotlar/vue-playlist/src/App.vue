<template>
  <h1>Slotlar</h1>
  <alt-bilesen>
    <template #baslik>
      <h2>{{ title }}</h2>
    </template>
    <template #icerik>
      <p>Bu Alt Bileşene Gönderilecek İçeriktir</p>
    </template>
    <hr />
    <template #baslik2>
      <h2>Bu Alt Bileşene Gönderilecek Başlıktır. 2</h2>
    </template>

    <template #icerik2>
      <p>Bu Alt Bileşene Gönderilecek İçeriktir 2</p>
    </template>
  </alt-bilesen>
</template>

<!--! Slotlar Alt Componente gönderilecek HTML'leri göndermeye yarar. -->

<script>
import altBilesen from "./components/alt-bilesen.vue";

export default {
  components: {
    "alt-bilesen": altBilesen,
  },
  data() {
    return {
      title: "Merhaba, ben alt bileşene iletilecek başlığım.",
    };
  },
};
</script>
