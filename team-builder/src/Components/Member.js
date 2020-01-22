import React, { useState, useEffect } from "react";

export default function Member (props) {
    const [member, setMember] = useState({});
    useEffect(()=> {
        setMember(props.members);
    }, [props.members])
    return (
        <div>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
        </div>
    )

//   return (
//     <div>
//       {props.member.map(member => (
//         <div className="member" key={member.id}>
//           <h2>{member.name}</h2>
//           <p>{member.email}</p>
//           <p>{member.role}</p>
//         </div>
//       ))}
//     </div>

//   );
};

