const { createApp } = Vue;

const eleman = {
  template:
    '<p>Ben Elemen Taginin içerisiyim. Benim Adım: {{ name }}</p><br/><button v-on:click="changeName">İsim Değiştir</button>',
  data() {
    return {
      name: "Abdullah AHLATLI",
    };
  },
  methods: {
    changeName: function () {
      this.name = "Kübra AHLATLI";
    },
  },
};

const oneApp = createApp({
  components: {
    "ilk-component": eleman,
  },
  data() {
    return {
      name: "Abdullah AHLATLI",
    };
  },
}).mount("#app-one");

const twoApp = createApp({
  components: {
    "two-components": eleman,
  },
  data() {
    return { title: console.log(oneApp.name) };
  },
}).mount("#app-two");
