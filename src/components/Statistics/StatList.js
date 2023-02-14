export default function StatList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <li key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  );
}

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
