import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <svg
            height="30"
            width="30"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-18jsvk2 r-16y2uox r-8kz0gk"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 items-center"
              onClick={() =>
                item.title === "Profile"
                 ?navigate('/profile/5')
                 :navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="py-10">
            <Button
            sx={{width:"100%",borderRadius:"29px",py:"15px",bgcolor:"#1d9bf0"}}
            variant="contained"
            >
                Post
            </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <Avatar
                alt="username"
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                />
                <div>
                    <span>Het Patel</span>
                    <span className="opacity-70">@HetPatel2802</span>
                </div>

            </div>
      </div>
    </div>
  );
};

export default Navigation;
