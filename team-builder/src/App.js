import React, { useState } from 'react';
import './App.css';
import './Components/MemberForm';
import './Components/Member'
import MemberForm from './Components/MemberForm';
import Member from './Components/Member';


function App() {
  const [members, setMembers] = useState({
    name: "Anthony Hernandez",
    email: "amhwaa@gmail.com",
    role: "Full-Stack Web Dev"

});
console.log(members);
  const addMembers = member => {
    const newMember = setMembers([...members, member]);
  }

  return (
    <div className="App">
      <h1>New Member</h1>
      <MemberForm addMember={addMembers} />
      <h1>Current Members</h1>
      <Member member={members} />

    </div>
  );
}

export default App;
