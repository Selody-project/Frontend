import { ViewerIcon, RegularIcon, AdminIcon, OwnerIcon } from "./iconConstants";

export const accessData = [
	{
		id: "viewer",
		icon: <ViewerIcon />,
		text: "그룹 일정 투표만 가능",
	},
	{
		id: "regular",
		icon: <RegularIcon />,
		text: "커뮤니티에 글 등록",
		text2: "본인이 작성한 글에 한해 수정 및 삭제",
	},
	{
		id: "admin",
		icon: <AdminIcon />,
		text: "그룹 일정을 등록, 수정, 삭제",
		text2: "다른 그룹원이 작성한 글 삭제 가능",
	},
	{
		id: "owner",
		icon: <OwnerIcon />,
		text: "그룹원의 요청 수락, 내보내기, 그룹 삭제 가능",
	},
];
