import { Link, Outlet } from 'react-router-dom';

const Team = () => (
  <div>
    <h2>This is Team Component</h2>
    <div>
      <ul><li><Link to="/team/member">Member</Link></li></ul>
    </div>
    <Outlet />
  </div>
);

export default Team;