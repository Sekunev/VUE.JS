const { createApp } = Vue;

createApp({
  data() {
    return {
      karakterler: ["Kazım", "Behlül", "Esra", "Kubra"],
      ozellikler: [
        { name: "Adnan", age: 42 },
        { name: "Behlül", age: 25 },
        { name: "Esra", age: 36 },
      ],
    };
  },
  methods: {},
  //! computed ile sadece ilgili değişkenin render edilmesi sağlanıyor. methods'da bir değişken değiştiğinde bütün değişkenler kontrol ediliyordu.
  computed: {
    // degisikligiAlgila: function () {
    //   return { aktif: this.aktiflik, extra: this.extra };
    // },
  },
}).mount("#app");
