import PropTypes from 'prop-types';

export default function StatList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(stat => {
        return (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
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
