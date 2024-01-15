<template>
  <app-header v-bind:title="title" />
  <button v-on:click="changeTitle">Parent Titleyi değiştir</button>
  <app-article v-bind:users="users" />
  <app-footer v-bind:title="title" />
</template>

<!--! Referans yani obje ve Array'larda root dosya içerisinde de olsa yapılan değişiklik ana değişkeni etkiler. -->
<!--! Primitive yani String, İnt, Boolen props'larda ise değişim sadece parent'de olur. Child'de değişim olmaz. -->

<script>
import Header from "./components/header.vue";
import Article from "./components/article.vue";
import Footer from "./components/footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-article": Article,
    "app-footer": Footer,
  },
  data() {
    return {
      title: "Sayfamızın Başlığı...",
      users: [
        { name: "Gökhun", spec: "Geliştirici", show: false },
        { name: "Elif", spec: "Stratejist", show: false },
        { name: "Han", spec: "Daha bebek", show: false },
        { name: "Alper", spec: "Patron", show: false },
        { name: "Yağız", spec: "Patron yavrusu", show: false },
        { name: "Zahide", spec: "Ev hanımı", show: false },
      ],
    };
  },

  methods: {
    changeTitle: function () {
      this.title = " Parent Comp tanımlanan changeTitle ile Başlık Değişti";
    },
  },
};
</script>
