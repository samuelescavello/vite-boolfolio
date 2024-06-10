<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
  <ul>
    <li v-for="project in projects">{{project.title}}</li>
  </ul>
</template>

<script>
import { store } from './store';
import axsios from 'axios';
  export default {
    name: 'App',
    data() {
      return {
        store,
        projects:[]
      }
    },
    methods:{
        getAllProjects(){
            axsios.get(this.store.apiBaseUrl + '/projects').then((res)=> {
              // console.log(res.data);
              this.projects = res.data.results;
            });
        }
    },
    mounted(){
        this.getAllProjects();
    }
  }
</script>

<style lang="scss" scoped>

</style>