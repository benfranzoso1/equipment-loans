<template>
  <nav class="main-nav flex gap-15">
    <g-link to="/docs/">
      <span class="main-nav__label">Get Financing</span>
    </g-link>

    <g-link to="/starters/">
      <span class="main-nav__label">Industries</span>
    </g-link>

    <g-link to="/plugins/">
      <span class="main-nav__label">Blog</span>
    </g-link>

    <g-link to="/blog/">
      <span class="main-nav__label">Wiki</span>
    </g-link>
  </nav>
</template>

<style lang="scss">
.main-nav {
  flex-wrap: nowrap;
}
@media screen and (max-width: 850px) {
  .main-nav {
    order: 10;
    min-width: 100%;
    a {
      padding-top: 5px;
      padding-bottom: 10px;
    }
  }
}
</style>
