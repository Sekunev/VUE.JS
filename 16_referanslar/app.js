const { createApp } = Vue;

var one = createApp({
  data() {
    return {
      output: "",
    };
  },
  // elemnt'lere verilen ref'e this.$refs ile ulaşıyoruz.
  methods: {
    readRefs: function () {
      console.log(this.$refs);
      console.log(this.$refs.icerik);
      console.log(this.$refs.icerik.value);
      console.log(this.$refs.icerik2.innerHTML);

      this.output = this.$refs.icerik.value;
      // this.output = this.$refs.icerik2.innerHTML;
    },
  },
}).mount("#app");
