import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.prevention();
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName,}
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  //forming current data into an object using the values stored in state
    // const formData = {
    //   firstName: firstName,
    //   lastName: lastName,
    }
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
  }
//this method allows to save user inputs. We are introducing "listOfSubmissions" variable in order to store the "submittedData" function
    const listOfSubmissions= submittedData.map((data, index) => {
      return (
        <div key = {index}>
          {data.firstName} {data.lastName}
        </div>
      );
    });

    // props.sendFormDataSomewhere(formData);
    // setFirstName("");
    // setLastName("");

  return (
    <div>
    <form onSubmit = {handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
      {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
      // ^ provides conditions for the error message ^
        ))
      : null}
    <h3>Submission </h3>
    </div>
  );


export default Form;
