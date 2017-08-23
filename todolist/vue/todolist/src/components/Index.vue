<template>
  <div class="home">
      <input type="text" @keyup.enter="save">
      <p v-for="item in lists">{{ item }}</p>
  </div>
</template>
<script>
export default {
  name:'home',
  data(){
      return {
          lists:[]
      }
  },
  methods:{
      save(e){
          console.log(e.target.value);
          this.lists.push(e.target.value);
      }
  }
}
</script>
<style>

</style>


