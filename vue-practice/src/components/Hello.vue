<template>
  <div class="hello">
    <h1>{{ newmsg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for='(item,key,index) in object'>
        {{ item }} + {{ key }} + {{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      object: {
        FirstName: 'John',
        LastName: 'Doe',
        Age: 30
      }
    }
  },

  computed:{
    newmsg:{
      get(){
        return this.msg;
      },
      set(data){
        this.msg = data+'lin';
      }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
