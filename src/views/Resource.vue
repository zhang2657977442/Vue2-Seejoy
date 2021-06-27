<template>
<div class="resourse" >
 <nav-bar :active-index="resourse"></nav-bar>
 <resourse-main></resourse-main>
</div>
</template>
<script>
import NavBar from "@/components/home/NavBar.vue";
import ResourseMain from "@/components/resourse/ResourseMain.vue";
export default {
  name: "Resource",
  data() {
    return {
      resourse: "resourse",
    };
  },
  components: {
    NavBar,
    ResourseMain,
  },
};
</script>
<style scoped>
</style>
