import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../FriendList/FriendListItem/FriendListItem";

import css from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map((friend) => (
      <li key={friend.id} className={css.friendItem}>
        <FriendListItem {...friend} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;