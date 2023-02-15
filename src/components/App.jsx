import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';

import data from 'components/Statistics/data.json';
import Statistics from './Statistics/Statistics';

import friends from 'components/FriendList/friends.json';
import FriendList from 'components/FriendList/FriendList';

import transactions from 'components/TransactionHistory/transactions.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>

      <div>
        <FriendList friends={friends} />
      </div>

      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
