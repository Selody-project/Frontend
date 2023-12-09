import { ViewerIcon, RegularIcon, AdminIcon, OwnerIcon } from "./iconConstants";

export const ACCESS_LEVEL_DATA = [
	{
		accessLevel: "viewer",
		icon: <ViewerIcon />,
		text: "그룹 일정 투표만 가능",
	},
	{
		accessLevel: "regular",
		icon: <RegularIcon />,
		text: "커뮤니티에 글 등록\n본인이 작성한 글에 한해 수정 및 삭제",
	},
	{
		accessLevel: "admin",
		icon: <AdminIcon />,
		text: "그룹 일정을 등록, 수정, 삭제\n다른 그룹원이 작성한 글 삭제 가능",
	},
	{
		accessLevel: "owner",
		icon: <OwnerIcon />,
		text: "그룹원의 요청 수락, 내보내기, 그룹 삭제 가능",
	},
];
