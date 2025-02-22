import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
        <div className={css.FriendListItem}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.Name}>{name}</p>
            <p style={{ color: isOnline ? "green" : "red"}}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
}