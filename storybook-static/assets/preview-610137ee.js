import{R as r}from"./index-8db94870.js";import{W as f,F as E}from"./styled-components.browser.esm-84a9e6e9.js";import"./_commonjsHelpers-042e6b4d.js";const{useParameter:y,addons:v,useEffect:j,useMemo:T}=__STORYBOOK_MODULE_PREVIEW_API__;var k=Object.defineProperty,S=(t,e)=>{for(var o in e)k(t,o,{get:e[o],enumerable:!0})},F={};S(F,{initializeThemeState:()=>b,pluckThemeFromContext:()=>c,useThemeParameters:()=>u});var R="@storybook/addon-styling",D=`${R}/theme-switcher`,_="theming",q="theme",M={},C={REGISTER_THEMES:`${D}/REGISTER_THEMES`};function c({globals:t}){return t[q]||""}function u(){return y(_,M)}function b(t,e){v.getChannel().emit(C.REGISTER_THEMES,{defaultTheme:e,themes:t})}var O=([t,e])=>e,x=({Provider:t,GlobalStyles:e,defaultTheme:o,themes:a={}})=>{let n=Object.keys(a),l=o||n[0];return b(n,l),(i,h)=>{let{themeOverride:s}=u(),d=c(h),g=T(()=>{let p=s||d||l,m=Object.entries(a);return m.length===1?O(m[0]):a[p]},[a,d,s]);return t?r.createElement(t,{theme:g},e&&r.createElement(e,null),i()):r.createElement(r.Fragment,null,e&&r.createElement(e,null),i())}};const H=f`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend, button,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
	text-decoration: none;
}
button {
	border: none;
	cursor: pointer;
}
`,P={colors:{background:"#F6F9FC",backgroundInverse:"#7A8997",positive:"#E1FFD4",negative:"#FEDED2",primary:"#6C55FE",secondary:"#1EA7FD",tertiary:"#DDDDDD",text:"#000000",textUnSelected:"#A3B2C3"},spacing:{padding:{small:10,medium:20,large:30},borderRadius:{small:5,default:10}},typography:{type:{primary:'"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',code:'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'},weight:{regular:"400",common:"500",bold:"700",extrabold:"800",black:"900"},size:{s1:14,s2:15,s3:16,s4:17,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48}}},w=[x({themes:{light:P},defaultTheme:"light",Provider:E,GlobalStyles:H})];export{w as decorators};
//# sourceMappingURL=preview-610137ee.js.map
