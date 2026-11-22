import styles from './UserCard.module.css';

export function UserCard({ name }: { name: string }) {
  return (
    <aside className={styles.card}>
      <p className={styles.title}>Покупатель</p>
      <strong>{name}</strong>
    </aside>
  );
}
