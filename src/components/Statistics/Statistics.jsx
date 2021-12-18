import React from "react";
import PropTypes from "prop-types";

import css from "./Statistics.module.css";

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statisticList}>
      {stats.map((stat) => {
        const randomColor = () => {
          return Math.floor(Math.random() * 256);
        };
        const myColor = `rgba( ${randomColor()} , ${randomColor()} , ${randomColor()} )`;

        const itemStyles = {
          backgroundColor: myColor,
        };
        return (
          <li key={stat.id} className={css.item} style={itemStyles}>
            <span className={css.label}>{stat.name}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;