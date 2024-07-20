import React from "react";

const ProfileCard = ({name, image, description}) => {
    return (
        <div className="profile-card">
            <img src={image} alt={`${name}'s profile`}></img>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ProfileCard;