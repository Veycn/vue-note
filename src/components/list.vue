<template>
    <div class="list-wrapper">
        <div class="header">
          <h3>My Notes App</h3>
          <div class="btn-group btn-group-justified" role="group" aria-label="...">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default"
                      :class="{'active': change}"
                      @click="change = true" >Left</button>
            </div>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default"
                      :class="{'active': !change}"
                      @click="change = false">Middle</button>
            </div>
          </div>
        </div>
        <div class="list">
          <ul>
            <li
              v-for="(item, index) in (change ? list : likeList)"
              :key="index"
              :class="{'isActive': item === activeArticle }"
              @click="selectActive(item)">{{ item.title }}</li>
          </ul>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters } from 'vuex';
    export default {
      name: "list",
      data(){
        return {
          change: false
        }
      },
      computed: {
        list(){
          return this.$store.state.articleList;
        },
        ...mapState(['activeArticle']),
        ...mapGetters(['likeList'])
      },
      methods: {
          ...mapMutations(['selectActive'])
      }
    }
</script>

<style scoped>
    .list-wrapper {
      width: 300px;
      float: left;
      height: 100%;
      padding: 20px;
    }
    .header h3 {
      text-align: center;
    }
  .header {
    height: 10%;
    border-bottom: 1px solid #ccc;
  }
  .list {
    height: 90%;
    overflow: auto;
  }
  .list li {
    line-height: 40px;
    cursor: pointer;
    user-select: none;
  }
  .isActive {
    background-color: darkgrey;
    color: #fff;
  }
</style>
