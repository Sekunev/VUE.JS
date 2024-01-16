<template>
  <div id="add-blog">
    <h2 v-if="!submitted">Yeni Blog Post Ekleme</h2>
    <form v-if="!submitted">
      <label for="title">Blog Başlığı</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label for="content">Blog İçeriği</label>
      <input type="text" v-model.lazy="blog.content" required />

      <div id="checkboxes">
        <label for=""></label>
        <label for="cRoman">Çizgi Roman</label>
        <input
          id="cRoman"
          type="checkbox"
          value="Çizgi Roman"
          v-model="blog.categories"
        />
        <label>Hikaye</label>
        <input type="checkbox" value="Hikaye" v-model="blog.categories" />
        <label>Masal</label>
        <input type="checkbox" value="Masal" v-model="blog.categories" />
        <label>Şiir</label>
        <input type="checkbox" value="Şiir" v-model="blog.categories" />
      </div>

      <label for="author">Yazar:</label>
      <!-- seçilen değişken v-model="blog.author ile author'un içerisine kaydediliyor. -->
      <select v-model="blog.author">
        <option value="">Lütfen Yazar Seçiniz</option>
        <option v-for="author in authors" v-bind:value="author">
          {{ author }}
        </option>
      </select>
      <p><button v-on:click.prevent="gonder">Blog'lara Ekle</button></p>
    </form>
    <div v-if="submitted">
      Tebrikler, mesajınız başarı ile alındı.
      <button v-on:click="newblog">Yeni Blog Ekle</button>
    </div>

    <div id="preview" v-if="!submitted">
      <h3>Blog Ön İzleme</h3>
      <p>Blog Başlığı: {{ blog.title }}</p>
      <p>Blog İçeriği: {{ blog.content }}</p>
      <br />
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Yazar: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["Ali", "Kübra", "Semra", "Esra", "Nevra"],
      submitted: false,
    };
  },
  methods: {
    resetForm: function () {
      this.blog = {
        title: "",
        content: "",
        categories: [],
        author: "",
      };
    },
    gonder: function () {
      var self = this;
      //! self, JavaScript'te genellikle bir kapsam (scope) değişkeni olarak kullanılır. Bu, iç içe fonksiyonlarda veya bir fonksiyonun içinde yerel bir kapsam (scope) değişkenine erişmek için kullanılır. JavaScript'te fonksiyonlar kendi kapsamlarını oluşturur ve iç içe fonksiyonlarda, içteki fonksiyon dışındaki değişkenlere erişim genellikle bu şekilde sağlanır.

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        header: {
          "Content-Type": "content/type",
        },
        body: {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1,
        },
      })
        .then((res) => res.json())
        .then(function (json) {
          console.log(json);
          self.resetForm(); // Formu sıfırla
          self.submitted = true;
        })
        .catch(function (err) {
          console.log(err);
          self.submitted = false;
        });
    },
    newblog: function () {
      this.submitted = false;
    },
  },
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 15px;
}
#checkboxes label {
  display: inline-block;
}
</style>
