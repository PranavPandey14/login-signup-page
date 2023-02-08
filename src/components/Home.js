import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);

  console.log(inpval);

  const getdata = (e) => {
    // console.log(val.target.value);

    const { value, name } = e.target;
    // console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inpval;

    if (name === "") {
      alert(" name field is requred!");
    } else if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    } else if (date === "") {
      alert("date field is requred");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      alert("Account Created");
      // history("/login")
      localStorage.setItem("user", JSON.stringify([...data, inpval]));
    }
  };
  return (
    <>
      <div className="container my-4  d-flex flex-column align-items-center">
        <h3 className=" mb-5 mt-5">Sign Up</h3>
        <Form className="border border-2 border-dark rounded py-5 px-4 ">
          <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="name"
              onChange={getdata}
              placeholder="Enter Your Name"
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              onChange={getdata}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
            <Form.Control onChange={getdata} type="date" name="date" />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-12" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              onChange={getdata}
              placeholder="Password"
            />
          </Form.Group>

          <Button
            onClick={addData}
            variant="primary  mb-3 col-lg-12 full-width"
            type="submit"
          >
            Submit
          </Button>
        </Form>
        <p className="mt-3">
          Already have an account
          <span>
            <NavLink to="/login"> SignIn</NavLink>
          </span>
        </p>
      </div>
    </>
  );
}
