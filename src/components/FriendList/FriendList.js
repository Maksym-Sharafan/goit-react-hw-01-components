import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    <FriendListItem friend={friends} />
  </ul>
);

export default FriendList;
