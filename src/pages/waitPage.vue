<template>
    <div class="fullscreen flex justify-center flex-center bg-black">
        <div style="z-index: 2;color: green;">
            barystech
        </div>
        <div class="back">

        </div>
    </div>
</template>
  
<script setup lang="ts">

</script>
<style scoped lang="scss">
.back{
    width: 120vw;
    height: 120vw;
    position: absolute;
    //background: radial-gradient(closest-side, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9), rgba(0,0,0,1));
    background: radial-gradient(closest-side, rgba(255, 255, 255, 0.479), rgba(255, 254, 254, 0.075));
    //background: grey;
    z-index: 1;
    background-size:cover;
    //animation:spin 5s linear infinite;
}
@keyframes spin{
	from{transform:rotate(0deg)}
	to{transform:rotate(360deg)}	
}

</style>