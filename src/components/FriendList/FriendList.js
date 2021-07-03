import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className={styles.item}>
        <span
          className={styles.status}
          style={{
            backgroundColor: isOnline ? 'rgb(61, 150, 61)' : 'rgb(175, 63, 63)',
          }}
        ></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
