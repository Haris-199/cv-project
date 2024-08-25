import { useState } from "react";
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";
import ExperienceTab from "./ExperienceTab";
import "../styles/form.css";
/* eslint-disable react/prop-types */


export default function Form({ info, handleChange }) {
  const [educationEdit, setEducationEdit] = useState(-1);

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    location: "",
    start: "",
    end: "",
  });

  function cloneInfo() {
    const newObj = { ...info };
    newObj.personal = { ...info.personal };
    newObj.education = [...info.education];
    return newObj;
  }

  return (
    <div className="form">
      <form action="">
        <div className="personal">
          <h2>Personal Information</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={info.personal.name}
            onChange={(e) => {
              const newObj = cloneInfo();
              newObj.personal.name = e.target.value;
              handleChange(newObj);
            }}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={info.personal.email}
            onChange={(e) => {
              const newObj = cloneInfo();
              newObj.personal.email = e.target.value;
              handleChange(newObj);
            }}
          />

          <label htmlFor="number">Phone Number</label>
          <input
            type="tel"
            name="number"
            id="number"
            value={info.personal.number}
            onChange={(e) => {
              const newObj = cloneInfo();
              newObj.personal.number = e.target.value;
              handleChange(newObj);
            }}
          />
          <label htmlFor="address">Address</label>
          <input
            type="tel"
            name="address"
            id="address"
            value={info.personal.address}
            onChange={(e) => {
              const newObj = cloneInfo();
              newObj.personal.address = e.target.value;
              handleChange(newObj);
            }}
          />
        </div>

        <div className="education">
          <h2>Education</h2>
          {educationEdit > -1 ? (
            <>
              <label htmlFor="school-name">School</label>
              <input
                type="text"
                name="school-name"
                id="school-name"
                value={education.school}
                onChange={(e) => {
                  setEducation({ ...education, school: e.target.value });
                }}
              />

              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                name="degree"
                id="degree"
                value={education.degree}
                onChange={(e) => {
                  setEducation({ ...education, degree: e.target.value });
                }}
              />

              <label htmlFor="school-location">Location</label>
              <input
                type="text"
                name="school-location"
                id="school-location"
                value={education.location}
                onChange={(e) => {
                  setEducation({ ...education, location: e.target.value });
                }}
              />

              <label htmlFor="school-start">Start</label>
              <input
                type="text"
                name="school-start"
                id="school-start"
                value={education.start}
                onChange={(e) => {
                  setEducation({ ...education, start: e.target.value });
                }}
              />

              <label htmlFor="school-end">End</label>
              <input
                type="text"
                name="school-end"
                id="school-end"
                value={education.end}
                onChange={(e) => {
                  setEducation({ ...education, end: e.target.value });
                }}
              />

              <CancelButton
                onClick={() => {
                  setEducationEdit(-1);
                  setEducation({
                    school: "",
                    degree: "",
                    location: "",
                    start: "",
                    end: "",
                  });
                }}
              />
              <SaveButton
                onClick={() => {
                  const newObj = cloneInfo();
                  newObj.education[educationEdit] = { ...education };
                  handleChange(newObj);
                  setEducationEdit(-1);
                  setEducation({
                    school: "",
                    degree: "",
                    location: "",
                    start: "",
                    end: "",
                  });
                }}
              />
            </>
          ) : (
            <>
              {info.education.map((obj) => (
                <div key={obj.school + obj.degree} className="edu-item-preview">
                  <button 
                    type="button"
                    className="del-btn"
                    onClick={() => {
                      const newObj = cloneInfo();
                      newObj.education = newObj.education.filter((edu) => edu.school !== obj.school);
                      handleChange(newObj);
                    }}
                  >Delete</button>
                  <p className="school">{obj.school}</p>
                  <p className="location">{obj.location}</p>
                  <p className="degree">{obj.degree}</p>
                  <p className="length">{obj.start}-{obj.end}</p>
                  <button type="button" className="edit-btn">Edit</button>
                  <button 
                    type="button"
                    className="edit-btn"
                    onClick={() => {
                      const i = info.education.findIndex(edu => (edu.school + edu.degree) === (obj.school + obj.degree));
                      setEducation({ ...info.education[i]});
                      setEducationEdit(i);
                    }}
                  >Edit</button>
                </div>
              ))}
              <button
                type="button"
                className="add-btn"
                onClick={() => setEducationEdit(info.education.length)}
              >
                Add
              </button>
            </>
          )}
        </div>

        <ExperienceTab info={info} handleChange={handleChange}/>
      </form>
    </div>
  );
}
