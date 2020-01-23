import React, { useState } from 'react';
import './App.css';
import './Components/MemberForm';
import './Components/Member';
import Member from './Components/Member';


function App () {
  const [members, setMembers] = useState([{
    name: "Anthony Hernandez",
    email: "amhwaa@gmail.com",
    role: "Full-Stack Web Developer"
}]);
console.log(members);

  const MemberForm = props => {
  const [member, setMember] = useState({
      name: "",
      email: "",
      role: "",
  });

  const handleChanges = event => {
      setMember({ ...member, [event.target.name]: event.target.value });
      console.log(member);
  };

  const submitHandler = event => {
      event.preventDefault();
      const newMember ={
          ...member,
          id: Date.now()
      };
      addNewMember(newMember);
      console.log(newMember);
      setMember({ name: "", email: "", role: "" });
  };
  return (
  <div>
    <form className="form" onSubmit={submitHandler}>
      {/* <h1>{member.name} </h1> */}
      <label htmlFor="name">Name</label>
      <input
        onChange={handleChanges}
        id="name"
        type="text"
        name="name"
        value={member.name}
      />

      <label htmlFor="email">Email Address </label>
      <input
        onChange={handleChanges}
        id="email"
        type="text"
        name="email"
        value={member.email}
      />

      <label htmlFor="role">Role </label>
      <select
        onChange={handleChanges}
        id="role"
        type="select"
        name="role"
        value={member.role}
      >
        <option> </option>
        <option value ='Full-Stack Web Developer'>Full-Stack Web Developer</option>
        <option value ='Data Scientist'>Data Scientist</option>
        <option value ='Buttered Toast'>Buttered Toast</option>
</select>
      <button name="submitButton" type="submit">
        Join!
      </button>
    </form>
  </div>
);
  }


  const addNewMember = member => {
    const newMember = setMembers([...members, member]);
    console.log(newMember);
  }

  return (
    <div className="App">
      <h1>New Member</h1>
      <MemberForm addNewMember={addNewMember} />
      <h1>Current Members</h1>
      <Member members={members} />

    </div>
  );
}
export default App