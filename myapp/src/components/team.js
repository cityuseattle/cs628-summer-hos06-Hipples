import { Link, Outlet } from 'react-router-dom';

const Team = () => (
  <div>
    <h2>This is Team Component</h2>
    <div>
      <ul>
        <li><Link to="/team/member/1">Member 1</Link></li>
        <li><Link to="/team/member/2">Member 2</Link></li>
        <li><Link to="/team/member/3">Member 3</Link></li>
      </ul>
    </div>
    <Outlet />
  </div>
);

export default Team;