<template>
<div class="answer">
     <nav-bar :active-index="answer"></nav-bar>
     <answer-main></answer-main>
</div>
</template>
<script>
import NavBar from '@/components/home/NavBar.vue'
import AnswerMain from '@/components/answer/AnswerMain.vue'
export default {
   name:'Answer',
    data() {
       return {
           answer:"answer"
       }
   },
   components:{
        NavBar,
      AnswerMain
   }
}
</script>
<style scoped>
</style>
