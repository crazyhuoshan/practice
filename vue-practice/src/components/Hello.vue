<template>
  <div class="hello">
    <h1>{{ newmsg }}</h1>
    <h2 @click.once='test'>Essential Links</h2>
    <ul>
      <li v-for='(item,key,index) in object'>
        {{ item }} + {{ key }} + {{ index }}
      </li>
    </ul>
    <input v-model='name' placeholder='test'>
    <p>{{ name }}</p>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
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
      },
      name:'',
      checkedNames:[]
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
  },
  methods:{
    test(){
      alert(123);
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
