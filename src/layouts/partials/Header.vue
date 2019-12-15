<template>
  <header>
    <div class="header-inner container flex gap-30">
      <Logo />
      <Nav class="flex-fit" />
      <nav class="header-actions flex">
        <ToggleTheme />
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo";
import Nav from "./Nav";
import ToggleTheme from "@/components/ToggleTheme.vue";

export default {
  components: {
    Logo,
    Nav,
    ToggleTheme
  }
};
</script>

<style lang="scss">
header {
  z-index: 20;
  position: relative;
  top: 0;
  background-color: var(--bg-transparent);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: nowrap;
  position: sticky;
  transition: background-color 0.3s, border-color, 0.3s;
  backdrop-filter: blur(4px);

  .header-inner {
    padding: 0 var(--space);
    min-height: var(--header-height);
  }
}
</style>
