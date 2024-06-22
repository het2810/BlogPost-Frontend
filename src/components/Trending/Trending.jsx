import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Trending() {
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full outline-full text-gray-500 pl-12 w-full"
        />
        <div className="absolute top-0 left-0 pt-3 pl-3">
          <SearchOutlinedIcon className="text-gray-500" />
        </div>
      </div>
      <section className="my-5">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">Subscribe to unlock new features</h1>
        <Button varient="contained" sx={{ paddind: "10px", paddingX: "20px", borderRadius: "25px " }}>
            Get Verified
        </Button>
      </section>
      <section className="mt-7 space-y-5 ">
        <h1 className="font-bold text-xl py-1">What's Happening</h1>
        <div>
            <p className="text-sm">
                Lorem ipsum dolor sit.   
            </p>
            <p className="fontbold">
                Lorem, ipsum.
            </p>
        </div>
        {[1,1,1,1].map((item) => <div className="flex justify-between w-full">
            <div>
                <p>Lorem ipsum dolor sit.</p>
                <p className="font-bold">#TheMarvels</p>
                <p>34.3k Posts</p>
            </div>
            <MoreHorizIcon/>
        </div>)}
      </section>
    </div>
  );
}

export default Trending;
