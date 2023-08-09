import { useNavigate } from "react-router-dom";

const Details = () => {
  let navigate = useNavigate();

  const goForward = () => navigate(1);

  return (
    <div>
      <h2>Understanding BrowserRouter</h2>
      <p>
        In this HOS, we are implementing routing using BrowserRouter! <br />
        You can learn more <a href="https://reactrouter.com/en/main/router-components/browser-router" 
                              target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <br /><br />
      <button onClick={goForward}>Go Forward</button>
    </div>
  );
}

export default Details;