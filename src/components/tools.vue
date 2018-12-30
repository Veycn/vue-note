<template>
    <div class="tools-wrapper">
      <i class="glyphicon glyphicon-plus" @click="add"></i>
      <i
        class="glyphicon glyphicon-heart"
        @click="changeLike"
        :class="{'isLike': isLike}"
        ></i>
      <i class="glyphicon glyphicon-remove" @click="deleteArticle"></i>
    </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
    export default {
      name: "tools",
      methods: {
        add(){
          this.$store.commit('add');
        },
        ...mapMutations(['changeLike', 'deleteArticle'])
      },
      computed: {
        ...mapGetters(['isLike'])
      }
    }
</script>

<style scoped>
  .tools-wrapper {
    width: 80px;
    height: 100%;
    float: left;
    padding: 35px 25px;
    background-color: lime;
  }
  i {
    font-size: 30px;
    color: #fff;
    margin-bottom: 30px;
    cursor: pointer;
  }
  .isLike {
    color: red!important;
  }
</style>
