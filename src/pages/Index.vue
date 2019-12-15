<template>
  <Layout class="layout-homepage">
    <home-intro-simple />
    <home-how-it-work-simple />
  </Layout>
</template>

<script>
import HomeIntroSimple from "@/components/home/HomeIntroSimple.vue";
import HomeHowItWorkSimple from "@/components/home/HomeHowItWorkSimple.vue";

export default {
  components: {
    HomeIntroSimple,
    HomeHowItWorkSimple
  }
};
</script>

<style>
@media screen and (min-width: 850px) {
  .layout-homepage header {
    border-color: transparent;
  }
}
</style>
