/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const siteLang = document.documentElement.lang;
let main, footer;

if (siteLang === 'en') {
  main = enMain;
  footer = enFooter;
} else if (siteLang === 'es') {
  main = esMain;
  footer = esFooter;
} else if (siteLang === 'zh-cn') {
  main = zhMain;
  footer = zhFooter;
}
