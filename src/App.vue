<template>
  <div id="appentrance">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      post: []
    }
  },
  methods: {
    login: function() {
      axios.get('https://jsonplaceholder.typicode.com/posts/').then(res => {
        console.log(res.data)
        this.post = res.data
      })
    }
  }
}
</script>
<style scoped>
#appentrance {
  /*height:100vh;*/
  width: 100vw;
  overflow-x: hidden;

  /*background-color:red;*/
}
</style>
