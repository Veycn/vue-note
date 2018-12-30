<template>
    <div class="editor-wrapper">
      <div class="title">
        <p>文章标题</p>
        <label for="title">
          <input type="text" id="title" class="form-control" v-model="activeTitle">
        </label>
      </div>
      <div class="content">
        <p>文章内容</p>
        <label for="content">
          <textarea id="content" class="form-control" :value="activeContent" @input="editArticle({content: $event.target.value})"></textarea>
        </label>
      </div>
    </div>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex"
    export default {
      name: "editor",
      computed: {
        ...mapGetters(['activeContent']),
        activeTitle: {
          get(){
            return this.$store.getters.activeTitle
          },
          set(value){
            this.$store.commit('editArticle', {title: value})
          }
        }
      },
      methods: {
        ...mapMutations(['editArticle'])
      }
    }
</script>

<style scoped>
  .editor-wrapper{
    height: 100%;
    width: 750px;
    float: left;
    margin-left: 15px;
  }
  .title {
    height: 10%;
    margin-top: 5px;
  }
  .content {

    height: 90%;
  }
  .title input{
    width: 750px;
    height: 40px;
    font-size: 22px;
  }
  label {
    height: 3%;
  }
  .content textarea {
    resize: none;
    width: 750px;
    height: 800px;
  }
</style>
