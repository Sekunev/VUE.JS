const { createApp } = Vue;

createApp({
  data() {
    return {
      age: 41,
      a: 0,
      b: 0,
    };
  },
  methods: {
    // ayaYasEkle: function () {
    //   console.log("A Kontrol");
    //   return this.age + this.a;
    // },
    // byaYasEkle: function () {
    //   console.log("B Kontrol");
    //   return this.age + this.b;
    // },
  },
  //! computed ile sadece ilgili değişkenin render edilmesi sağlanıyor. methods'da bir değişken değiştiğinde bütün değişkenler kontrol ediliyordu.
  computed: {
    ayaYasEkle: function () {
      console.log("A Kontrol");
      return this.age + this.a;
    },
    byaYasEkle: function () {
      console.log("B Kontrol");
      return this.age + this.b;
    },
  },
}).mount("#app");
