 



 import React, { useState, useEffect } from 'react';
import "../Styles/formEleme.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    qualification: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, age, qualification } = formData;
    const formDataString = `Name: ${name}\nEmail: ${email}\nAge: ${age}\nQualification: ${qualification}`;
    alert(formDataString);
    setFormData({
      name: '',
      email: '',
      age: '',
      qualification: '',
    });
  }

  function validateForm() {
    const { name, email, age, qualification } = formData;
    const isValid = name && email && age && qualification;
    setIsFormValid(isValid);
  }

  return (
    <div className="form-container" style={{ marginTop: "50px" }}>
      <form onSubmit={handleSubmit} autoComplete='false'>
        <h1>Sign-UP</h1>
        <p>Sign-up to continue on your application</p>
        <label htmlFor="" className="lab1">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="" className="lab1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="" className="lab1">
          Age
        </label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="" className="lab1">
          Qualification
        </label>
        <select
          name="qualification"
          value={formData.qualification}
          onChange={handleInputChange}
          style={{ cursor: "pointer" }}
          required
        >
          <option value="" disabled>
            Select Qualification
          </option>
          <option value="SSLC">SSLC</option>
          <option value="PLUS TWO">PLUS TWO</option>
          <option value="DEGREE">DEGREE</option>
          <option value="PG">PG</option>
        </select>
        <input
          type="submit"
          value="Submit"
          style={{
            backgroundColor: isFormValid ? 'red' : '',
            color: isFormValid ? 'white' : '',
          }}
        />
      </form>
    </div>
  );
}

export default MyForm;
