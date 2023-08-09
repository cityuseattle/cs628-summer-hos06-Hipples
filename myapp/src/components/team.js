import { Link, Outlet, useNavigate } from 'react-router-dom';

const Team = () => {
  let navigate = useNavigate();

  const redirectToHome = () => navigate("/");
  const goBack = () => navigate(-1);

  return (
    <div>
      <h2>This is Team Component</h2>
      <div>
        <ul>
          <li><Link to="/team/member/1">Member 1</Link></li>
          <li><Link to="/team/member/2">Member 2</Link></li>
          <li><Link to="/team/member/3">Member 3</Link></li>
        </ul>
        <button onClick={redirectToHome}>Redirect to Home</button>
        <br /><br />
        <button onClick={goBack}>Go Back</button>
      </div>
      <Outlet />
    </div>
  );
}

export default Team;

