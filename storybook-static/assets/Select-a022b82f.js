import{a as c,j as p}from"./jsx-runtime-91a467a5.js";import{H as f,C as m}from"./styled-components.browser.esm-84a9e6e9.js";import{r as o}from"./index-8db94870.js";import{P as e}from"./index-1fc0ca9a.js";const g=r=>o.createElement("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},o.createElement("path",{d:"M1 1L7 7L13 1",stroke:"#30374F",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),h=({width:r,height:t,fontSize:i,fontWeight:l,color:a,backgroundColor:s,marginLeft:u,border:d})=>m`
		width: ${r}px;
		height: ${t}px;
		font-size: ${i}px;
		font-weight: ${l};
		color: ${a};
		background-color: ${s};
		border: ${d};
		& svg {
			margin-left: ${u}px;
		}
	`,b=f.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	${r=>h(r)}
`,n=({label:r,...t})=>c(b,{...t,children:[r,p(g,{})]});n.propTypes={label:e.string.isRequired,width:e.number,height:e.number,fontSize:e.number,fontWeight:e.number,color:e.string,backgroundColor:e.string,marginLeft:e.number,border:e.string,onClick:e.func};n.defaultProps={fontSize:14,fontWeight:400,color:"black",backgroundColor:"white",border:"none",onClick:null};n.__docgenInfo={description:"드롭다운으로 요소를 나타내는 Select 컴포넌트",methods:[],displayName:"Select",props:{fontSize:{defaultValue:{value:"14",computed:!1},type:{name:"number"},required:!1,description:"글자 크기"},fontWeight:{defaultValue:{value:"400",computed:!1},type:{name:"number"},required:!1,description:"글자 두꼐"},color:{defaultValue:{value:'"black"',computed:!1},type:{name:"string"},required:!1,description:"글자 색상"},backgroundColor:{defaultValue:{value:'"white"',computed:!1},type:{name:"string"},required:!1,description:"배경 색상"},border:{defaultValue:{value:'"none"',computed:!1},type:{name:"string"},required:!1,description:"테두리 설정"},onClick:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"글자(내용)"},width:{type:{name:"number"},required:!1,description:"너비"},height:{type:{name:"number"},required:!1,description:"높이"},marginLeft:{type:{name:"number"},required:!1,description:"꺽쇠 위치"}}};export{n as S};
//# sourceMappingURL=Select-a022b82f.js.map
