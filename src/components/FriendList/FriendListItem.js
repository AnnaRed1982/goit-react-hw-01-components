import PropTypes from 'prop-types';

export default function FriendListItem({ friends }) {
  return friends.map(friend => {
    return (
      <li className="item" key={friend.id}>
        <span className="status">{friend.isOnline}</span>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friend.name}</p>
      </li>
    );
  });
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

// avatar, name, isOnline
