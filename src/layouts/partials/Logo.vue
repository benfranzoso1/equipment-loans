<template>
  <div class="logo" @contextmenu="rightClick" oncontextmenu="return false;">
    <g-link class="logo__link" to="/" title="Back to home">
      <Logo class="logo__svg" alt="Equipment-Loans.com" />
    </g-link>
  </div>
</template>

<script>
import Logo from "~/assets/images/logo.svg";
export default {
  components: {
    Logo
  },
  methods: {
    rightClick() {
      this.$router.push({ path: "/logo" });
      return false;
    }
  }
};
</script>

<style lang="scss">
.logo {
  &__svg {
    height: auto;
    margin-top: -3px;
    &--small {
      max-width: 25px;
    }
  }
}
</style>
