import UserService from "../services/UserService";

const Profile = () => {
  const hasUserRole = UserService.hasRole(['user']);
  const hasAdminRole = UserService.hasRole(['admin']);

  return (
    <div>
      <h1>Profile Page</h1>
      <ul className="profile-items">
        <li className="nav-item">Username: {UserService.getUsername()}</li>
        <li className="nav-item">Has Role as User: {hasUserRole.toString()}</li>
        <li className="nav-item">Has Role as Admin: {hasAdminRole.toString()}</li>
      </ul>
      <button className="btn btn-danger" onClick={UserService.doLogout}>Log out</button>
    </div>
  )
}

export default Profile