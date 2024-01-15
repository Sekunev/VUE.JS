const { createApp } = Vue;

createApp({
  // data değişkenlerin tanımlandığı alan
  data() {
    return {
      name: "ss",
      age: "",
    };
  },
  methods: {
    isimYakala: function () {
      console.log("isim Alanına Bişey Yazdın");
    },
    yasYakala: function () {
      console.log("Yaş Alanına Bişey Yazdın");
    },
  },
}).mount("#app");
