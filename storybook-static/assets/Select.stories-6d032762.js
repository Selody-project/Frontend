import{a as w,j as S}from"./jsx-runtime-91a467a5.js";import{H as x,C}from"./styled-components.browser.esm-84a9e6e9.js";import{r as i}from"./index-8db94870.js";import{p as e}from"./index-58d3fd43.js";import"./_commonjsHelpers-042e6b4d.js";const P=r=>i.createElement("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},i.createElement("path",{d:"M1 1L7 7L13 1",stroke:"#30374F",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),T=({width:r,height:s,fontSize:m,fontWeight:g,color:f,backgroundColor:h,marginLeft:b,border:y})=>C`
		width: ${r}px;
		height: ${s}px;
		font-size: ${m}px;
		font-weight: ${g};
		color: ${f};
		background-color: ${h};
		border: ${y};
		& svg {
			margin-left: ${b}px;
		}
	`,k=x.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	${r=>T(r)}
`,n=({label:r,...s})=>w(k,{...s,children:[r,S(P,{})]});n.propTypes={label:e.PropTypes.string.isRequired,width:e.PropTypes.number,height:e.PropTypes.number,fontSize:e.PropTypes.number,fontWeight:e.PropTypes.number,color:e.PropTypes.string,backgroundColor:e.PropTypes.string,marginLeft:e.PropTypes.number,border:e.PropTypes.string};n.defaultProps={fontSize:14,fontWeight:400,color:"black",backgroundColor:"white",border:"none"};n.__docgenInfo={description:"드롭다운으로 요소를 나타내는 Select 컴포넌트",methods:[],displayName:"Select",props:{fontSize:{defaultValue:{value:"14",computed:!1},type:{name:"number"},required:!1,description:"글자 크기"},fontWeight:{defaultValue:{value:"400",computed:!1},type:{name:"number"},required:!1,description:"글자 두꼐"},color:{defaultValue:{value:'"black"',computed:!1},type:{name:"string"},required:!1,description:"글자 색상"},backgroundColor:{defaultValue:{value:'"white"',computed:!1},type:{name:"string"},required:!1,description:"배경 색상"},border:{defaultValue:{value:'"none"',computed:!1},type:{name:"string"},required:!1,description:"테두리 설정"},label:{type:{name:"string"},required:!0,description:"글자(내용)"},width:{type:{name:"number"},required:!1,description:"너비"},height:{type:{name:"number"},required:!1,description:"높이"},marginLeft:{type:{name:"number"},required:!1,description:"꺽쇠 위치"}}};const j={title:"Select",component:n,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},color:{control:"color"},fontWeight:{control:{type:"range",min:400,max:800,step:100}},fontSize:{control:"radio",options:[14,15,16,17,23]}}},o={args:{label:"2024년 4월",fontSize:23,marginLeft:12,width:145,height:28}},t={args:{label:"그룹 A",color:"#30374F",width:137,height:33,border:"1px solid #C9CCD7",marginLeft:64}};var a,p,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: "2024년 4월",
    fontSize: 23,
    marginLeft: 12,
    width: 145,
    height: 28
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,c,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "그룹 A",
    color: "#30374F",
    width: 137,
    height: 33,
    border: "1px solid #C9CCD7",
    marginLeft: 64
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const E=["Primary","Group"];export{t as Group,o as Primary,E as __namedExportsOrder,j as default};
//# sourceMappingURL=Select.stories-6d032762.js.map
