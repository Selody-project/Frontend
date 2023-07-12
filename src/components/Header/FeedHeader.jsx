import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Badge from "@mui/material/Badge";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";

import { openModal } from "@/features/ui/ui-slice.js";
import { Wrapper, MenuWrapper, GroupCreateBtn } from "./FeedHeader.styles";

const FeedHeader = () => {
	const dispatch = useDispatch();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	function notificationsLabel(count) {
		if (count === 0) {
			return "no notifications";
		}
		if (count > 99) {
			return "more than 99 notifications";
		}
		return `${count} notifications`;
	}

	return (
		<Wrapper>
			<MenuWrapper>
				<h1>FEED IN SELODY</h1>
				<ul>
					<NavLink to="/community">홈</NavLink>
					<IconButton aria-label={notificationsLabel(100)}>
						<Badge color="primary" badgeContent={0} showZero>
							<NotificationsActiveIcon
								aria-controls={open ? "fade-menu" : undefined}
								aria-haspopup="true"
								aria-expanded={open ? "true" : undefined}
								onClick={handleClick}
							/>
						</Badge>
					</IconButton>
					<Menu
						id="fade-menu"
						MenuListProps={{
							"aria-labelledby": "fade-button",
						}}
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						TransitionComponent={Fade}
					>
						<MenuItem onClick={handleClose}>111</MenuItem>
						<MenuItem onClick={handleClose}>222</MenuItem>
						<MenuItem onClick={handleClose}>333</MenuItem>
					</Menu>
				</ul>
			</MenuWrapper>
			<Paper
				component="form"
				sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
			>
				<InputBase
					sx={{ ml: 2, flex: 1 }}
					placeholder="Search Group"
					inputProps={{ "aria-label": "Search Group" }}
				/>
				<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
					<SearchIcon />
				</IconButton>
				<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
			</Paper>
			<GroupCreateBtn>
				<button type="button" onClick={() => dispatch(openModal())}>
					공유 페이지 생성
				</button>
			</GroupCreateBtn>
		</Wrapper>
	);
};

export default FeedHeader;
