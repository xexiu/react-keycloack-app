import UserService from "../services/UserService";

const HomePage = () => {
  return (
    <div className="row">
      <div className="row">
        <h3>Welcome back: {UserService.getUsername()}</h3>
        <button className="btn btn-danger" onClick={UserService.doLogout}>Log out</button>
      </div>
    </div>
  )
}
export default HomePage