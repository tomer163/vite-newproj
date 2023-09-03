<template>
  <NavBar
  :pages="pages"
  />
  <router-view/>
</template>

<script>
import NavBar from './components/navbar.vue'
import { ref, onBeforeMount } from 'vue'

export default {
  components: {
    NavBar,
  },
  setup() {
    const pages = ref([])

    onBeforeMount(() => {
      async function getPages() {
        let res = await fetch('pages.json');
        let data = await res.json();
        pages.value=data;
      }
      getPages();
    });

    return {
      pages,
    };
  },
};
</script>

<style scoped>

</style>
