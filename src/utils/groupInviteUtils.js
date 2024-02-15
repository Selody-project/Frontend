import customFetch from "@/components/UI/BaseAxios";

export const getGroupInviteLink = async (onFulfilled, groupId) => {
	const nowTime = new Date();

	try {
		const response = await customFetch.get(
			`api/group/${groupId}/join/invite-link`,
		);

		if (response.data === null || nowTime > new Date(response.data.exp)) {
			const inviteCode = await customFetch.post(
				`api/group/${groupId}/join/invite-link`,
			);

			onFulfilled(inviteCode.data);
		} else {
			onFulfilled(response.data);
		}
	} catch (error) {
		console.log(error);
	}
};

export const getGroupInfoWithInviteLink = async (onFulfilled, inviteCode) => {
	try {
		const response = await customFetch.get(
			`/api/group/invite-link/${inviteCode}`,
		);

		onFulfilled(response.data);
	} catch (error) {
		console.log(error);
	}
};
