import React from "react";

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-info">
        Всё
      </button>
      <button type="button" className="btn btn-outline-seondary">
        Понравилось
      </button>
    </div>
  );
};

export default PostStatusFilter;
