import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleList: [
      {
        title: '一篇新文章',
        content: '',
        isLike: false,
        time: 1546090998530
      },
      {
        title: '一篇新文章',
        content: '',
        isLike: false,
        time: 1546090998560
      },
      {
        title: '一篇新文章',
        content: '',
        isLike: false,
        time: 1546090998650
      }
    ],
    activeArticle: {}
  },
  mutations: {
    add(state){
      let article = {
        title: '一篇新文章',
        content: '',
        isLike: false,
        time: new Date().getTime()
      };
      state.articleList.push(article);
      state.activeArticle = article;
    },
    selectActive(state, item){
      state.activeArticle = item;
    },
    changeLike(state){
      state.activeArticle.isLike = !state.activeArticle.isLike;
      console.log(state.activeArticle.isLike);
    },
    deleteArticle(state){
      state.articleList = state.articleList.filter(res => res !== state.activeArticle);
      state.activeArticle = state.articleList.length > 0 ? state.articleList[0] : {};
    },
    editArticle(state, obj){
      // 在 Vue 中, 设置对象属性直接使用 obj.xxx = xxx 的形式, 这个值的改变不会被监控到
      // 我们应该使用 this.$set() 方法
      // 但是在 vuex 不能使用 Vue 实例的方法
      // 我们需要使用 Vue.set()
      // 但是我们有更好的方法

      Object.assign(state.activeArticle, obj);
    }
  },
  getters: {
    isLike(state){
      return state.activeArticle.isLike;
    },
    likeList(state){
      return state.articleList.filter(item => item.isLike)
    },
    activeTitle(state){
      return state.activeArticle.title
    },
    activeContent(state){
      return state.activeArticle.content
    }
  },
  actions: {

  }
})
