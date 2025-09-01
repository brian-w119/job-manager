import "./App.css";
import SignInForm from "./sign-in";
import logo from "./assets/logo.jpg";

export const Form = ({ id, label, type }) => {
  return (
    <form className="form-field">
      <label className="field" htmlFor={id}>
        {label}
      </label>
      <input className="field" type={type} id={id} name={id} />
    </form>
  );
};

const Outline = () => {
  return (
    <>
      <img src={logo}></img>
      <div className="outline">
        <Form id="name" label="Client's Name" type="text" />
        <textarea
          rows={10}
          placeholder="Enter job details"
          className="text-area"
        />
      </div>
    </>
  );
};

const App = () => {
  return <Outline className="form" />;
};

export default App;
