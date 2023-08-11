import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const setUser = useOutletContext()[1];
  return (
    <div className="flex items-center gap-4 h-screen justify-evenly  ';                                                                                                                     ">
      <h1 className="text-6xl">Al-Twit</h1>
      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          setUser({ id: 1, name: "Ali", email: "" });
          navigate("/");
        }}
      >
        <h3 className="text-3xl  text-center">Login</h3>
        <label className="flex flex-col">
          Email
          <input type="text" required className="border border-black" />
        </label>
        <label className="flex flex-col">
          Password
          <input type="password" required className="border border-black" />
        </label>
        <button>SUBMIT</button>
        <div className="flex justify-between">
          <Link to="/forgout">Lupa Pasword</Link>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}
