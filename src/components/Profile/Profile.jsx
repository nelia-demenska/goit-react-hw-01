import css from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.profile}>
            <img src={image} alt="User avatar" className={css.avatar} />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
            <ul className={css.stats}>
                <li>
                    <span>Followers: {stats.followers}</span>
                </li>
                <li>
                    <span>Views: {stats.views}</span>
                </li>
                <li>
                    <span>Likes: {stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;