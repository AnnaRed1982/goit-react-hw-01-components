import PropTypes from 'prop-types';

export default function StatList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => {
        return (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        );
      })}
    </ul>
  );
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};



// import StatItem from './StatItem';

// <ul className="stat-list">
//   {data.map(stat => (
//     <StatItem
//       key={stat.id}
//       label={stat.label}
//       percentage={stat.percentage}
//     />
//   ))}
// </ul>;
