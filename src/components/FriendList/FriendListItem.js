import PropTypes from 'prop-types';

export default function FriendListItem({ friends }) {
  return friends.map(({id, avatar, name, isOnline }) => {
    return (
      <li className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img
          className="avatar"
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{name}</p>
      </li>
    );
  });
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

// avatar, name, isOnline
