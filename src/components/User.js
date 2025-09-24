const User = ({ name, Location }) => {
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : {Location}</h3>
      <h4>Contact : deshwalgovind13@gmail.com</h4>
    </div>
  );
};

export default User;
