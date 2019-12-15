<template>
  <Section class="intro" dots="true">
    <div class="container text-center ">
      <div class="intro__message mb" hidden></div>

      <h1 class="intro__title">
        <span>Equipment Loans Made For</span>
        <transition name="rotate">
          <div v-if="currentText == 0" key="0">
            Construction Companys
          </div>
          <div v-else-if="currentText == 1" key="1">
            Farmers
          </div>
          <div v-else-if="currentText == 2" key="2">
            Trucking
          </div>
          <div v-else-if="currentText == 3" key="3">
            Markdown files
          </div>
          <div v-else-if="currentText == 4" key="4">
            Modern PWAs
          </div>
          <div v-else-if="currentText == 5" key="5">
            Serverless Apps
          </div>
        </transition>
      </h1>

      <p class="intro__lead lead post mb">
        We make it easy for business owners to access funds fast, so they can
        get back to what matters the most 🚀
      </p>

      <p class="intro__links">
        <g-link to="/docs/" class="button primary button--large">
          <span>Get started</span>
        </g-link>
      </p>
    </div>
  </Section>
</template>

<script>
export default {
  data() {
    return {
      currentText: 0
    };
  },
  mounted() {
    this._counter = setInterval(() => {
      this.currentText = (this.currentText + 1) % 6;
    }, 1500);
  },
  destroyed() {
    clearTimeout(this._counter);
  }
};
</script>

<style lang="scss">
.intro {
  padding: calc(2% + var(--space)) 0;

  &__title {
    font-size: 3rem;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 850px) {
      & {
        font-size: 2rem;
      }
    }
  }

  &__lead {
    max-width: 610px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.3rem;

    @media screen and (max-width: 850px) {
      & {
        font-size: 1rem;
      }
    }
  }

  &__info {
    font-size: 0.9rem;
  }
}
</style>
