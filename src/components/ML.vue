<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ml",
  setup() {
    return {};
  },
  data() {
    return {
      title: '안녕안녕~',
      author: 'Brandon Sanderson',
      age: 45
    }
  },
  methods: {
    changeTitle(title) {
      // this.title = 'Words of Randiance'
      this.title = title;
    }
  }
});
</script>

<template>
  <div>
    <p>{{ title }} - {{ author }} - {{ age }}</p>
    <button v-on:click="age++">Increase age</button>
    <button v-on:click="age--">Decrease age</button>
    <div @click="changeTitle('Oathbringer')">Change book title</div>
  </div>
</template>
