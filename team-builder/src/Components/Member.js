import React from "react";

export default function Member (props) {

    return (
        <div>
            {props.members.map(member => (
                <div className="member-list">
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
};

