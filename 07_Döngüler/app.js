const { createApp } = Vue;

createApp({
  data() {
    return {
      error: false,
      succes: true,
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
