<template>
  <div id="app">
    <Header />
    <main id="main" :class="mainClass">
      <slot />
    </main>
  </div>
</template>

<script>
import Header from "./partials/Header";

export default {
  components: {
    Header
  },
  computed: {
    mainClass() {
      let classes = [];
      if (this.primaryBg) classes.push("main--bg-teritary");
      return classes;
    }
  }
};
</script>
