<template>
  <Layout class="layout-homepage">
    <home-intro-simple />
  </Layout>
</template>

<script>
import HomeIntroSimple from "@/components/home/HomeIntroSimple.vue";

export default {
  components: {
    HomeIntroSimple
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
