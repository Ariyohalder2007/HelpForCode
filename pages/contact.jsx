import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, desc, phone);
    const data={phone, email, desc, name};
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for contacting! 👋")
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: "center" }}>Contact Us☎️</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="exampleInputEmail1" className={styles.formlable}>
              Email address
            </label>
            <input
              value={email}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlable}>
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlable}>
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="desc" className={styles.formlable}>
              Reason
            </label>
            <textarea
              className="form-control"
              name="desc"
              id="desc"
              rows="3"
              value={desc}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
