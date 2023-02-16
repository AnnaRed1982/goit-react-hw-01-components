import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css'
// import StatList from './StatList';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {{ title } && <h2 className={css.title}>{title}</h2>}

      <ul className={css["stat-list"]}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>

      {/* <StatList stats={stats} /> */}
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
