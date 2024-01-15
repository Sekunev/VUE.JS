const { createApp } = Vue;

const oneApp = createApp({
  data() {
    return {
      title: "Başlık-1",
    };
  },
  methods: {},

  computed: {
    greet: function () {
      return "app-1'in Başlığı";
    },
  },
}).mount("#app-one");

//! Diğer instancelerin objelerine ulaşmak için önce bir değişkene ata sonra nokta notasyonu ile ulaş.
const twoApp = createApp({
  data() {
    return { title: "Başlık-2" };
  },

  methods: {
    baslıgıDegistir: function () {
      //! burdaki gibi
      oneApp.title = "Başlık-1 Değişti";
    },
  },

  computed: {
    greet: function () {
      return "app-2'in Başlığı";
    },
  },
}).mount("#app-two");
