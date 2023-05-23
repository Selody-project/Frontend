import{j as v}from"./jsx-runtime-91a467a5.js";import{H as w,C as x}from"./styled-components.browser.esm-84a9e6e9.js";import{P as e}from"./index-58d3fd43.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const V=({color:r,backgroundColor:l,fontSize:k,fontWeight:B,width:S,height:q})=>x`
		font-weight: ${B};
		font-size: ${k}px;
		color: ${r};
		background-color: ${l};
		width: ${S}px;
		height: ${q}px;
	`,$=w.button`
	${r=>V(r)}
`,s=({label:r,...l})=>v($,{...l,children:r});s.propTypes={backgroundColor:e.string,color:e.string,label:e.string.isRequired,onClick:e.func,fontSize:e.number,fontWeight:e.number,width:e.number,height:e.number};s.defaultProps={backgroundColor:"#6C55FE",color:"white",onClick:null,fontWeight:400,fontSize:14,width:89,height:34};s.__docgenInfo={description:"버튼 컴포넌트 디자인",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:'"#6C55FE"',computed:!1},type:{name:"string"},required:!1,description:"배경색 지정"},color:{defaultValue:{value:'"white"',computed:!1},type:{name:"string"},required:!1,description:"글자색 지정"},onClick:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:"Optional click handler"},fontWeight:{defaultValue:{value:"400",computed:!1},type:{name:"number"},required:!1,description:"내용 두께"},fontSize:{defaultValue:{value:"14",computed:!1},type:{name:"number"},required:!1,description:"내용 크기"},width:{defaultValue:{value:"89",computed:!1},type:{name:"number"},required:!1,description:"너비"},height:{defaultValue:{value:"34",computed:!1},type:{name:"number"},required:!1,description:"높이"},label:{type:{name:"string"},required:!0,description:"내용"}}};const F={title:"Button",component:s,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},color:{control:"color"},fontWeight:{control:{type:"range",min:400,max:800,step:100}},fontSize:{control:"radio",options:[14,15,16,17]}}},o={args:{label:"Button"}},t={args:{label:"Button",backgroundColor:"#9B9FAA"}},a={args:{label:"Button",backgroundColor:"#C9CCD7"}},n={args:{label:"Button",backgroundColor:"#383838"}};var u,c,i;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Button",
    backgroundColor: "#9B9FAA"
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,f,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Button",
    backgroundColor: "#C9CCD7"
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,C,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Button",
    backgroundColor: "#383838"
  }
}`,...(y=(C=n.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const G=["Primary","DarkGrey","LightGrey","Black"];export{n as Black,t as DarkGrey,a as LightGrey,o as Primary,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Button.stories-9732ced3.js.map
