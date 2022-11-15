<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ml",
  setup() {
    return {};
  },
  data() {
    return {
      showBooks: true,
      title: '안녕안녕~',
      author: 'Brandon Sanderson',
      age: 45,
      x: 0,
      y: 0,
    }
  },
  methods: {
    changeTitle(title) {
      // this.title = 'Words of Randiance'
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
});
</script>

<template>
  <div>
    <!-- v-if가 들어간 태그는 그 공간 통째로 들어오고 나간다. 공간을 유지하지 않는다.-->
    <div v-if="showBooks">
      <p>{{ title }} - {{ author }} - {{ age }}</p>
    </div>
    <button v-on:click="age++">Increase age</button>
    <button v-on:click="age--">Decrease age</button>
    <div @click="changeTitle('Oathbringer')">Change book title</div>

    <button @click="toggleShowBooks">
      <span v-if="showBooks">Hide Books</span>
      <!-- <span v-if="!showBooks">Show Books</span> -->
      <span v-else>Show Books</span>
    </button>
    <!-- v-show는 공간은 남아있고 display:none으로 제어된다. 공간을 유지한다. -->
    <div v-show="showBooks">currently showing books</div>

    <br>
    <!-- mouse event -->
    <div class="box" @mouseover="handleEvent($event, 5)">mouseover (enter)</div>
    <div class="box" @mouseleave="handleEvent">mouseleave</div>
    <div class="box" @dblclick="handleEvent">double click</div>
    <div class="box" @mousemove="handleMousemove">position - {{ x }} {{ y }}</div>
  </div>
</template>
