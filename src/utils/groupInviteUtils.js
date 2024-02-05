import { toast } from "react-toastify";

import customFetch from "@/components/UI/BaseAxios";

export const createGroupInviteLink = async (
	onFulfilled,
	groupId,
	isLoading,
) => {
	try {
		isLoading(true);
		const response = await customFetch.post(
			`api/group/${groupId}/join/invite-link`,
		);

		onFulfilled(response.data);
		isLoading(false);
	} catch (error) {
		console.log(error);
	}
};

export const getGroupInviteLink = async (onFulfilled, groupId, isLoading) => {
	try {
		isLoading(true);
		const response = await customFetch.get(
			`api/group/${groupId}/join/invite-link`,
		);

		onFulfilled(response.data);
		isLoading(false);
	} catch (error) {
		console.log(error);
	}
};

export const getGroupInfoWithInviteLink = async (
	onFulfilled,
	inviteCode,
	isLoading,
) => {
	try {
		isLoading(true);
		const response = await customFetch.get(
			`/api/group/invite-link/${inviteCode}`,
		);

		onFulfilled(response.data);
		isLoading(false);
	} catch (error) {
		console.log(error);
	}
};

export const joinGroupInviteLink = async (groupId, inviteCode, isLoading) => {
	try {
		isLoading(true);
		await customFetch.post(`/api/group/${groupId}/join/${inviteCode}`);
		isLoading(false);
		toast.success("그룹 가입에 성공하였습니다");
	} catch (error) {
		console.log(error);
		toast.error("그룹 가입에 실패했습니다.");
	}
};
