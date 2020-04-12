<template>
<div>
	<div style="font-size: 20px; font-weight: bold; text-align: center; margin: 20px;">这是主页</div>
</div>
</template>

<script>
import API from '@/request/api/api.js';
export default {
	data() {
		return {

		};
	},
  methods:{
    getData(){
      // API.Index.getData().then(res=>{
      //   console.log(res)
      // }).catch(err=>{
      // })
    }
  }
}
</script>

<style>

</style>
