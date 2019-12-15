<template>
  <Section class="works">
    <div class="grid-cols grid-cols--gap-large grid-cols--full-md">
      <Card title="Apply">
        <h4>Test</h4>
        <p>put test content</p>
        <h4>Test</h4>
        <p>put test contnet</p>
        <h4>Test</h4>
        <p>put test contnet</p>

        <template slot="outer">
          <Dots class="hide-for-small" />
          <Dots class="dots--vertical show-for-small" />
        </template>
      </Card>

      <Card title="Fund" class="text-center flex-align-middle">
        <div class="works__logo">
          <LogoSmall />
          <div class="works__pulse-bg"></div>
          <div class="works__pulse-bg"></div>
        </div>

        <p class="works__powered-by">
          Powered by <br /><strong>Amur 🐆</strong>
        </p>

        <ul class="works__tools flex gap-15 text-center flex--center">
          <li>Equipment-Loans.com</li>
        </ul>

        <template slot="outer">
          <Dots class="hide-for-small" />
          <Dots class="dots--vertical show-for-small" />
        </template>
      </Card>

      <Card title="Repeat">
        <h4>Filler content in here</h4>
        <p>
          <g-link to="/docs/deploy-to-netlify/">filler</g-link>,
          <g-link to="/docs/deploy-to-amplify/">filler</g-link>,
          <g-link to="/docs/deploy-to-zeit-now/">filler</g-link>,
          <g-link to="/docs/deploy-to-amazon-s3/">Filler</g-link>, filler
          content here.
        </p>

        <ul class="bullet-list mb">
          <li>
            <Bullet /><g-link to="/docs/fast-by-default/#pre-rendered-html"
              >Test</g-link
            >
          </li>
          <li>
            <Bullet /><g-link
              to="/docs/fast-by-default/#automatic-code-splitting"
              >Test</g-link
            >
          </li>
          <li>
            <Bullet /><g-link to="/docs/fast-by-default/#the-prpl-pattern"
              >Test</g-link
            >
          </li>
          <li>
            <Bullet /><g-link to="/docs/fast-by-default/#smart-link-prefetching"
              >Test</g-link
            >
          </li>
          <li>
            <Bullet /><g-link to="/docs/fast-by-default/#progressive-images"
              >Test</g-link
            >
          </li>
        </ul>
      </Card>
    </div>
  </Section>
</template>

<script>
import LogoSmall from "~/assets/images/logo-small-white.svg";
import Bullet from "~/assets/images/bullet.svg";
import Dots from "~/components/Dots.vue";
import Card from "~/components/Card.vue";

export default {
  components: {
    LogoSmall,
    Bullet,
    Dots,
    Card
  }
};
</script>

<style lang="scss">
.works {
  .bullet-list li {
    margin-bottom: 0.3rem;
  }

  .card__inner {
    padding: 30px 40px;
  }

  @media screen and (max-width: 850px) {
    .card {
      margin-bottom: 40px;
    }
  }

  &__tools {
    font-weight: 500;
    border: 1px solid var(--border-color);
    max-width: 230px;
    border-radius: 4px;
    z-index: 9;
    margin: 0 auto !important;
    padding: 10px;

    li {
      margin-bottom: 0;
    }
  }

  &__logo {
    background-color: var(--primary-color);
    width: 100px;
    z-index: 1;
    position: relative;
    height: 100px;
    margin: 0 auto;
    margin-top: 18%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 100%;
    z-index: 0;
    margin-bottom: 1rem;
    animation: bounce 2s infinite;

    svg {
    }
  }

  &__pulse-bg {
    animation: pulse 2s infinite;
    border: 3px solid var(--primary-color);
    width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 100%;
    opacity: 0.3;
    z-index: -1;

    + .works__pulse-bg {
      width: 95px;
      height: 95px;
      animation-delay: 0.3s;
    }
  }

  &__powered-by {
    opacity: 0.8;
    line-height: 1.3;
    padding-bottom: 1.2rem;
  }
}
</style>
