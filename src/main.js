// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// Import global styles
import "~/assets/style/index.scss";

import DefaultLayout from "~/layouts/Default.vue";
import Section from "~/components/Section.vue";
import Card from "~/components/Card";

import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.6,
  scaleRatio: 1.9,
  headerFontFamily: [
    "Jost",
    "Helvetica",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: [
    "Jost",
    "Helvetica",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ]
});

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("Section", Section);
  Vue.component("Card", Card);

  head.style.push({
    type: "text/css",
    cssText: typography.toString()
  });
}
