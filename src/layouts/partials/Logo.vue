<template>
  <div class="logo" @contextmenu="rightClick" oncontextmenu="return false;">
    <g-link class="logo__link" to="/" title="Back to home">
      <Logo class="logo__svg hide-for-small" alt="Equipment-Loans.com" />
      <LogoSmall
        class="logo__svg show-for-small logo__svg--small"
        alt="Equipment-Loans.com"
      />
    </g-link>
  </div>
</template>
<script>
import Logo from "~/assets/images/logo.svg";
import LogoSmall from "~/assets/images/logo-small.svg";
export default {
  components: {
    Logo,
    LogoSmall
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
  }
}
</style>
