const { createApp } = Vue;

createApp({
  // data değişkenlerin tanımlandığı alan
  data() {
    return {
      ilkDegişken: "Hoşgeldin",
      ikinciDegişken: "Slm",
      yas: 41,
      name: "Kübra",
      a: 3,
      b: 4,
      giyim: {
        sapka: true,
        tshirt: "mavi",
      },
      yetenek: ["Sürücü", "yazılımcı"],
    };
  },
  methods: {
    hesapla: function () {
      return "İyi Günler " + this.name;
    },
    selamla: (param) => "Slm " + param,
    merhaba: () => "Merhabalar" + this.name,
    topla: function () {
      return this.a + this.b;
    },
  },
}).mount("#ilk");
