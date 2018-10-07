// CommentList.js
import React from "react";

const Herolist = heroIds => (
  <div className="hero-list">
    {heroIds.map((id) =>
      <img key={id} src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${id}.png`} />
    )}
  </div>
)

export default Herolist
