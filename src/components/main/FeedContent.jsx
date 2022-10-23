import React from "react";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

const FeedContent = ({ post }) => {
  return (
    <div className="mx-3">
      <div className="mt-2">
        <button className="mr-2">
          <FavoriteBorderRoundedIcon className="text-xl" />
        </button>
        <button>
          <ChatBubbleOutlineRoundedIcon className="text-xl" />
        </button>
      </div>
      <div className="mt-2 font-bold">좋아요 {post?.likeAmount}개</div>
      <div className="my-2">
        <div className="font-bold inline-block float-left mr-2">
          {post?.user}
        </div>
        <div>{post?.body}</div>
        {/* <div>{post?.timeStamp}</div> */}
      </div>
    </div>
  );
};

export default FeedContent;
