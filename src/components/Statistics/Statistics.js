import PropTypes from 'prop-types';
import StatList from './StatList';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {{ title } && <h2 className="title">{title}</h2>}

      <StatList stats={stats} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};
