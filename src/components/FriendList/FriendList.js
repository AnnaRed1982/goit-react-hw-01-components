import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';
// import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={css.item} key={id}>
            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}

      {/* <FriendListItem friends={friends} /> */}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
