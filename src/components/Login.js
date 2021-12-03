import { Link } from "react-router-dom";

const Login = ({ onClick, onChange }) => {
  return (
    <div className="login">
      <input type="text" onChange={(e) => onChange(e.target.value)} />
      <button type="button" onClick={() => onClick()}>
        Entrar
      </button>
    </div>
  );
};

export default Login;
