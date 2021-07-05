import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendList.module.css';

const FriendListItem = ({ friend }) =>
  friend.map(({ avatar, name, isOnline, id }) => (
    <li key={id} className={styles.item}>
      <span
        className={styles.status}
        style={{
          backgroundColor: isOnline ? 'rgb(61, 150, 61)' : 'rgb(175, 63, 63)',
        }}
      />
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  ));

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendListItem;
