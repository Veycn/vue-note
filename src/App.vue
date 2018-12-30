<template>
  <div id="app">
    <note-tools></note-tools>
    <note-list></note-list>
    <note-editor></note-editor>
  </div>
</template>

<script>
  import noteTools from './components/tools'
  import noteList from './components/list'
  import noteEditor from './components/editor'
export default {
  name: 'App',
  components: {
    noteTools,
    noteList,
    noteEditor
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #app{
    height: 100%;
    overflow: hidden;
  }
  body {
    position: relative;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
</style>
