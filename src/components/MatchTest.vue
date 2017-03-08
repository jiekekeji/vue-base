<template>
  <div class="container">

  </div>
</template>

<script>
  import 'mint-ui/lib/style.css';
  import {Toast} from 'mint-ui';
  import {Indicator} from 'mint-ui';
  import {api} from '../constant/api'
  import {common} from '../utils/common'

  export default{
    data(){
      return {}
    },
    components: {},

    watch: {},
    beforeRouteEnter  (to, from, next) {
      next();
    },
    created () {
    },
    mounted: function () {
    },
    activated: function () {
    },
    beforeRouteLeave (to, from, next) {
      next();
    },
    computer: {},
    methods: {},
  }
</script>

<style scoped>
  @import "../assets/style/base.css";
</style>
