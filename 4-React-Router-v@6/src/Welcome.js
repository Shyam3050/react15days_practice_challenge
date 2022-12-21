import {Outlet,Link} from "react-router-dom";
const Welcome = () => {
  return (
    <section>
      <h2>Welcome Component</h2>
      <Link to="new-user">new-user</Link>
      <Outlet />
    </section>
  );
};
export default Welcome;
