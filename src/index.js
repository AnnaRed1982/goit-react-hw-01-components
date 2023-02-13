import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';

import user from './user.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  Profile(user)
);

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers} </span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
