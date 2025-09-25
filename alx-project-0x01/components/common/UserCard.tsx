// components/common/UserCard.tsx
import React from 'react';
import styles from './UserCard.module.css'; // or use CSS-in-JS

// Define the props the card will accept
export interface UserCardProps {
  name: string;
  handle: string;
  avatarUrl?: string;
  bio?: string;
  joinedDate?: string; // e.g., 'Joined Jan 2020'
  location?: string;
  isVerified?: boolean;
  onMessage?: () => void;
  onFollow?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  handle,
  avatarUrl,
  bio,
  joinedDate,
  location,
  isVerified,
  onMessage,
  onFollow,
}) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.avatarWrapper}>
          <img
            src={avatarUrl || '/default-avatar.png'}
            alt={`${name}'s avatar`}
            className={styles.avatar}
          />
          {isVerified && <span className={styles.verified} title="Verified">✔</span>}
        </div>
        <div className={styles.userInfo}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.handle}>@{handle}</p>
        </div>
      </header>

      {bio && <p className={styles.bio}>{bio}</p>}

      <div className={styles.meta}>
        {location && <span className={styles.metaItem}>📍 {location}</span>}
        {joinedDate && <span className={styles.metaItem}>🗓 {joinedDate}</span>}
      </div>

      <footer className={styles.actions}>
        <button className={styles.button} onClick={onMessage} aria-label="Message user">
          💬 Message
        </button>
        <button className={styles.buttonOutline} onClick={onFollow} aria-label="Follow user">
          ➕ Follow
        </button>
      </footer>
    </article>
  );
};

export default UserCard;