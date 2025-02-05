import React from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

function FriendComponent({ friend, onClickOpenChat = false }) {
  const navigate = useNavigate();
  const { id: authenticated_user_id } = useSelector(
    (state) => state.authUserData.userData
  );

  const componentOnClickHandler = () => {
    if (onClickOpenChat) {
      const userIds = [authenticated_user_id, friend.id];
      const sortedUserIds = userIds.sort();
      const url = `/chat/${sortedUserIds.join("_")}`;
      navigate(url);
    } else {
      navigate(`/profile/${friend.id}`);
    }
  };
  return (
    <div style={{ cursor: "pointer" }}>
      <h4 onClick={componentOnClickHandler}>
        <Image
          style={{
            width: "100px",
            height: "100px",
            marginRight: "15px",
          }}
          src={
            "https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0"
          }
          roundedCircle
        />
        {friend.first_name} {friend.last_name}
      </h4>
    </div>
  );
}

export default FriendComponent;
