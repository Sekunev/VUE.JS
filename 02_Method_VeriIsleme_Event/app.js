const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Abdullah",
      webSite: "https://vuejs.org/",
      webSiteTag: '<a href="https://vuejs.org">Vue.Js Web Sitesi</a>',
    };
  },
  methods: {},
}).mount("#app");

createApp({
  data() {
    return {
      webSite: "https://vuejs.org/",
      x: 0,
      y: 0,
      yas: 41,
    };
  },
  methods: {
    artır: function () {
      return this.yas++;
    },
    azalt: function () {
      return this.yas--;
    },
    updateXY(event) {
      console.log(event);

      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    tıkla() {
      return alert("Tukladın");
    },
  },
}).mount("#app1");
