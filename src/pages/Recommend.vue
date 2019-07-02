<template>
  <div class="recommend">
    
    <List :list="recommend" :dataName="'recommend'"></List>
  </div>
</template>
<script>
import List from '../components/List'
import {mapGetters} from 'vuex'
export default {
 
  components:{List},
  mounted(){
    this.$store.dispatch('UPDATE_RECOMMEND')
  },
  computed:mapGetters([
    'recommend'
  ]),
  updated(){
    console.log("recommend",this.recommend)
  }
}
</script>
<style scoped>

</style>

