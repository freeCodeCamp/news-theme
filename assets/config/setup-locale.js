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
} else if (siteLang === 'pt-br') {
  main = ptBrMain;
  footer = ptBrFooter;
} else if (siteLang === 'it') {
  main = itMain;
  footer = itFooter;
} else if (siteLang === 'ja') {
  main = jaMain;
  footer = jaFooter;
} else if (siteLang === 'uk') {
  main = ukMain;
  footer = ukFooter;
}
