import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const BlogCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeletePost = () => {
    console.log("Delete");
    handleClose();
  };
  const handleEditPost = () => {
    console.log("EDIT");
    handleClose();
  };
  const handleUnFollowUser = () => {
    console.log("UNFOLLOW");
    handleClose();
  };
  const handleOpenReplyModel = () => {
    console.log("OPEN MODEL");
  };
  const handleLike = () => {
    console.log("Like");
  };
  const handleDislike = () => {
    console.log("Dis Like");
  };
  const navigate = useNavigate();
  return (
    <div className="">
      {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
            <RepeatIcon/>
            <p>Your Post</p>
        </div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Het Patel</span>
              <span className="text-gray-600">@hetpatel2802 . 2m</span>
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleEditPost}>Edit</MenuItem>
                <MenuItem onClick={handleUnFollowUser}>Unfollow</MenuItem>
                <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2">
            <div className="cursor-pointer">
              <p className="mb-2 p-0">Lorem ipsum dolor sit amet.</p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="https://images.unsplash.com/photo-1715449187020-e090eb0dc3d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
                alt=""
              />
            </div>
            <div className="py-2 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                {/* <ThumbUpOffAltIcon/>
                    <ThumbDownOffAltIcon/> */}
                <div onClick={handleOpenReplyModel} className="flex space-x-2">
                  <ChatBubbleOutlineIcon className="cursor-pointer" />
                  <p>12</p>
                </div>
                <div onClick={handleLike} className="flex space-x-2">
                  {true ? (
                    <ThumbUpIcon className="text-blue-600" />
                  ) : (
                    <ThumbUpOffAltIcon className="text-pink-600" />
                  )}
                  <p>12</p>
                </div>
                <div onClick={handleDislike} className="flex space-x-2">
                  {true ? (
                    <ThumbDownIcon className="text-red-600" />
                  ) : (
                    <ThumbDownOffAltIcon className="text-pink-600" />
                  )}
                  <p>12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
