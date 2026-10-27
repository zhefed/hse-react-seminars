import type { User } from "../src/types";

type Props = {
    profile: User | null;
};

export function ProfileCard({ profile }: Props) {
    if (!profile) return null;

    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <code>{profile.nickname}<br/>
                Телефон: {profile.phone}<br/>
                Описание: {profile.bio || '—'}
            </code>
        </div>
    )
}

export default ProfileCard;
