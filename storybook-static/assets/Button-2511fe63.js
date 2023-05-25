import{a as s}from"./jsx-runtime-91a467a5.js";import{H as d,C as p}from"./styled-components.browser.esm-84a9e6e9.js";import{P as e}from"./index-1fc0ca9a.js";const c=({color:t,backgroundColor:r,fontSize:n,fontWeight:o,width:l,height:a,lineHeight:u})=>p`
		font-weight: ${o};
		font-size: ${n}px;
		color: ${t};
		background-color: ${r};
		width: ${l}px;
		height: ${a}px;
		line-height: ${u}px;

		& svg {
			margin-right: 7.67px;
		}
	`,f=d.button`
	${t=>c(t)}
	display: flex;
	justify-content: center;
	align-items: center;
`,i=({label:t,children:r,...n})=>s(f,{...n,children:[r,t]});i.propTypes={backgroundColor:e.string,color:e.string,label:e.string.isRequired,onClick:e.func,fontSize:e.number,fontWeight:e.number,width:e.number,height:e.number};i.defaultProps={backgroundColor:"#6C55FE",color:"white",onClick:null,fontWeight:400,fontSize:14,width:89,height:34};i.__docgenInfo={description:"버튼 컴포넌트 디자인",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:'"#6C55FE"',computed:!1},type:{name:"string"},required:!1,description:"배경색 지정"},color:{defaultValue:{value:'"white"',computed:!1},type:{name:"string"},required:!1,description:"글자색 지정"},onClick:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:"Optional click handler"},fontWeight:{defaultValue:{value:"400",computed:!1},type:{name:"number"},required:!1,description:"내용 두께"},fontSize:{defaultValue:{value:"14",computed:!1},type:{name:"number"},required:!1,description:"내용 크기"},width:{defaultValue:{value:"89",computed:!1},type:{name:"number"},required:!1,description:"너비"},height:{defaultValue:{value:"34",computed:!1},type:{name:"number"},required:!1,description:"높이"},label:{type:{name:"string"},required:!0,description:"내용"}}};export{i as B};
//# sourceMappingURL=Button-2511fe63.js.map
