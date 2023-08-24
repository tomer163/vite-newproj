<template>
  <NavBar
  v-if="pages.length>0"
  :pages="pages"
  @update-parent-value="(index)=>currentPage=index"
  />
  <PageBody
  v-if="pages.length>0"
  :page="pages[currentPage]"/>
</template>

<script>
import PageBody from './components/pageBody.vue'
import NavBar from './components/navbar.vue'
import { ref, onBeforeMount } from 'vue'

export default {
  components: {
    PageBody,
    NavBar,
  },
  setup() {
    const currentPage = ref(0)
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
      currentPage,
    };
  },
};
</script>

<style scoped>

</style>
