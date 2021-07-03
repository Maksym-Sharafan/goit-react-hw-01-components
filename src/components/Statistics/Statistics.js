import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>

    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={styles.item}
          style={{
            backgroundColor: `${
              '#' +
              (Math.random().toString(16) + '000000')
                .substring(2, 8)
                .toUpperCase()
            }`,
          }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
