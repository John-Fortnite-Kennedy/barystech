<template>
  <div style="height: 100vh; width: 100wv">
    <q-tabs v-model="tab" class="my-content-class" active-class="my-active-class" indicator-color="transparent">
      <q-tab name="first" icon="people" label="bruh" class="first other" :ripple=false /><div class="arrow" id="first_arrow" @click="changeTab('second')"></div>
      <q-tab name="second" icon="people" label="bruh" class="second other" :ripple=false /><div class="arrow" id="second_arrow" @click="changeTab('third')"></div>
      <q-tab name="third" icon="people" label="bruh" class="third other" :ripple=false /><div class="arrow" id="third_arrow" @click="changeTab('fouth')"></div>
      <q-tab name="fouth" icon="people" label="bruh" class="fouth other" :ripple=false /><div class="arrow" id="fourth_arrow" @click="changeTab('fifth')"></div>
      <q-tab name="fifth" icon="people" label="bruh" class="fifth other" :ripple=false />
    </q-tabs>
    <q-tabs v-model="tab" class="my-content-class2" active-class="my-active-class tmp" indicator-color="transparent">
      <q-tab name="first" class="other" style="background-image: url('https://media.istockphoto.com/id/951514270/photo/glad-to-work-with-you.jpg?s=1024x1024&w=is&k=20&c=AeTL4H6IfrXzzsukZmHgwzv4-vT_YG6brIYpThOg07E=');" />
      <div class="second line" @click="changeTab('second')"></div>
      <q-tab name="second" class="other" style="background-image: url('https://thumbs.dreamstime.com/b/business-accounting-team-meeting-room-office-using-pen-pointing-paperwork-finance-concept-business-accounting-team-meeting-154771088.jpg');"/>
      <div class="third line" @click="changeTab('third')"></div>
      <q-tab name="third" class="other" style="background-image: url('https://media.istockphoto.com/id/498323251/photo/colleagues-discussing-over-digital-tablet.jpg?s=612x612&w=0&k=20&c=DNvyl9vDe6sRY76cuGdaye1unr_F48GKRtm2FB8thII=');"/>
      <div class="fouth line" @click="changeTab('fouth')"></div>
      <q-tab name="fouth" class="other" style="background-image: url('https://media.gettyimages.com/id/682143876/photo/small-business-working-at-the-office.jpg?s=612x612&w=gi&k=20&c=skv23VTL1FsU4xY2j-nPgmZBSaEODsnTx1LqnH39t2s=');"/>
      <div class="fifth line" @click="changeTab('fifth')"></div>
      <q-tab name="fifth" class="other" style="background-image: url('https://media.istockphoto.com/id/1284066336/photo/modern-gadgets-in-interior-of-coworking-office-during-covid-19-epidemic.jpg?s=612x612&w=0&k=20&c=Rl3eAbIDD7aCe63ibkA7Ng_-VJV-Npuc9Ey_eIE24U8=');"/>
    </q-tabs>
    <!-- <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="first" style="background-image: url('https://media.istockphoto.com/id/951514270/photo/glad-to-work-with-you.jpg?s=1024x1024&w=is&k=20&c=AeTL4H6IfrXzzsukZmHgwzv4-vT_YG6brIYpThOg07E=');">
        <div class="text-h6">Mails</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="second" style="background-image: url('https://thumbs.dreamstime.com/b/business-accounting-team-meeting-room-office-using-pen-pointing-paperwork-finance-concept-business-accounting-team-meeting-154771088.jpg');">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="third" style="background-image: url('https://media.istockphoto.com/id/498323251/photo/colleagues-discussing-over-digital-tablet.jpg?s=612x612&w=0&k=20&c=DNvyl9vDe6sRY76cuGdaye1unr_F48GKRtm2FB8thII=');">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="fouth" style="background-image: url('https://media.istockphoto.com/id/498323251/photo/colleagues-discussing-over-digital-tablet.jpg?s=612x612&w=0&k=20&c=DNvyl9vDe6sRY76cuGdaye1unr_F48GKRtm2FB8thII=');">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="fifth" style="background-image: url('https://media.istockphoto.com/id/498323251/photo/colleagues-discussing-over-digital-tablet.jpg?s=612x612&w=0&k=20&c=DNvyl9vDe6sRY76cuGdaye1unr_F48GKRtm2FB8thII=');">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels> -->
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Todo, Meta } from './models';

// interface Props {
//   title: string;
//   todos?: Todo[];
//   meta: Meta;
//   active: boolean;
// }
// const props = withDefaults(defineProps<Props>(), {
//   todos: () => [],
// });
// const todoCount = computed(() => props.todos.length);

const tab = ref('first');

const changeTab = (data: string) => {
  tab.value = data
}
</script>
<style lang="scss" scoped>

:deep(.q-focus-helper){
  display: none !important;
}

.line{
  height: 100%;
  width: 2.5rem;
}
.arrow{
  display: block;
  width: 0px;
  height: 100%;
  border:2.5rem solid transparent;
  border-right-width: 0px;
}
#first_arrow{  
  border-left-color: #ffae00;
  background-color: #b8fd17;
}
#second_arrow{  
  border-left-color: #b8fd17;
  background-color: #00ff80;
}
#third_arrow{  
  border-left-color: #00ff80;
  background-color: #00a2ff;
}
#fourth_arrow{  
  border-left-color: #00a2ff;
  background-color: #a200ff;
}

.first{
  background-color: #ffae00;
}
.second{
  background-color: #b8fd17;
}
.third{
  background-color: #00ff80;
}
.fouth{
  background-color: #00a2ff;
}
.fifth{
  background-color: #a200ff;
}
.other {
  flex-shrink: 1;
  transition: all 400ms ease;
  background-size: cover;
  background-position: center;
  opacity: 1;

}
.my-content-class2{
  height: 60%;
}
.my-content-class{
  box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.274);
  z-index: 10;
}
.q-tab-panels{
  height: 50%;
  
}
.tmp{

}
.my-active-class {
  flex-grow: 1;
  transition: all 400ms ease;  
}
:deep(.q-tab__content){
  align-items: flex-start;
}
:deep(.q-tab__label){
  overflow: hidden;
  text-align: left;
  width: 0%;
  display: none;
}
.my-active-class :deep(.q-tab__label)
{
  animation: openclose 0.4s ease-in-out;
  animation-fill-mode: forwards;
  display: block;
}
@keyframes openclose {
  0% {
    width: 0%;
    
  }
  100% {
    width: 100%;
  }
}
</style>
