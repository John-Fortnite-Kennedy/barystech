<template>
    <!-- <div class="flex fullscreen">
        <div class="row">
            <div class="col-1">/</div>
            <div class="col-10">/</div>
            <div class="col-1">/</div>
        </div>
        <div class="row">
            <div class="col-1">/</div>
            <div class="col-10">/</div>
            <div class="col-1">/</div>
        </div>
        <div class="row">
            <div class="col-1">/</div>
            <div class="col-10">/</div>
            <div class="col-1">/</div>
        </div>
    </div> -->
    <div class="fullscreen wrapper">
        <div>/</div>
        <div @click="showLoading">/</div>
        <div>/</div>

            <div>/</div>
            <div>/</div>
            <div>/</div>

        <div>/</div>
        <div>/</div>
        <div>/</div>
    </div>
  </template>
  
<script setup lang="ts">
import useQuasar from 'quasar/src/composables/use-quasar.js';
import { onBeforeUnmount } from 'vue'

const $q = useQuasar()
let timer : any

onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })

const showLoading = () => {
        $q.loading.show({
          message: 'Doing something. Please wait...',
          spinnerColor: 'primary',
          boxClass: 'text-red'
        })
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 30000)
    }
</script>
<style scoped lang="scss">
.my-class{
    color: red;
}
.wrapper{
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: 1fr 10fr 1fr;
    

    // & div:nth-child(2n) {
    //     background-color: pink;
    // }
    & div:not(:nth-child(2n)){
        background-color: rgb(157, 226, 226);
    }
    & div:nth-child(5) {
        background-color: transparent;
    }
    & div:nth-child(2n+4){
        background: url('https://www.textures.com/system/gallery/photos/Ornaments/Egyptian/86152/OrnamentsEgyptian0003_1_350.jpg');
        background-size: auto;
        background-position: center;
    }
    & div:nth-child(6n+2) {
        height: 100%;
        background: url('https://as2.ftcdn.net/v2/jpg/04/69/33/83/1000_F_469338358_x5RVluTknGKY31QSCBVyiw245hJd2QFE.jpg');
        background-size: auto 120%;
        background-repeat: repeat;
        background-position: center;
        animation: slide 60s linear infinite;
    }

    @keyframes slide {
        0% {
            background-position: 0 center;
        }
        100% {
            background-position: -100% center;
        }
    }

}
// .row{ 
//     width: 100%;
//     &:first-child{
//         height: 10%;
//     }
//     &:last-child{
//         height: 10%;
//     }
// }
// .col-1{
//     background-color: pink;
//}
</style>