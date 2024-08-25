import { useState } from "react";
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";
import '../styles/experience-tab.css';

export default function ExperienceTab({ info, handleChange }) {
  const [experienceEdit, setExperienceEdit] = useState(-1);
  const [experience, setExperience] = useState({
    title: "",
    company: "",
    location: "",
    start: "",
    end: "",
    description: [],
  });
  const [points, setPoints] = useState([]);
  const [point, setPoint] = useState("");

  function cloneInfo() {
    const newObj = { ...info };
    newObj.personal = { ...info.personal };
    newObj.education = [...info.education];
    newObj.experience = [...info.experience];
    for (let i = 0; i < info.experience.length; i++) {
      newObj.experience[i].description = [...info.experience[i].description];
    }
    return newObj;
  }

  return (
    <div className="experience">
      <h2>Experience</h2>
      {experienceEdit > -1 ? (
        <>
          <label htmlFor="title">Job Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={experience.title}
            onChange={(e) => {
              setExperience({
                ...experience,
                description: [...experience.description],
                title: e.target.value,
              });
            }}
          />

          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            value={experience.company}
            onChange={(e) => {
              setExperience({
                ...experience,
                description: [...experience.description],
                company: e.target.value,
              });
            }}
          />

          <label htmlFor="job-location">Location</label>
          <input
            type="text"
            name="job-location"
            id="job-location"
            value={experience.location}
            onChange={(e) => {
              setExperience({
                ...experience,
                description: [...experience.description],
                location: e.target.value,
              });
            }}
          />

          <label htmlFor="job-start">Start</label>
          <input
            type="text"
            name="job-start"
            id="job-start"
            value={experience.start}
            onChange={(e) => {
              setExperience({
                ...experience,
                description: [...experience.description],
                start: e.target.value,
              });
            }}
          />

          <label htmlFor="job-end">End</label>
          <input
            type="text"
            name="job-end"
            id="job-end"
            value={experience.end}
            onChange={(e) => {
              setExperience({
                ...experience,
                description: [...experience.description],
                end: e.target.value,
              });
            }}
          />

          <label htmlFor="point">Description</label>
          <div className="description-input">
            <input
              type="text"
              name="point"
              id="point"
              value={point}
              onChange={(e) => setPoint(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                setPoints([...points, point]);
                setPoint("");
              }}
            >
              Add Point
            </button>
            <ul>
              {points.map((pnt) => (
                <li key={pnt}>
                  <p>{pnt}</p>
                  <button
                    type="button"
                    onClick={() => setPoints(points.filter((p) => p !== pnt))}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <CancelButton />
          <SaveButton
            onClick={() => {
              const newObj = cloneInfo();
              newObj.experience[experienceEdit] = {
                ...experience,
                description: [...points],
              };
              handleChange(newObj);
              setExperienceEdit(-1);
            }}
          />
        </>
      ) : (
        <>
          {info.experience.map((obj) => (
            <div key={obj.title + obj.company} className="exp-item-preview">
              <button
                type="button"
                className="del-btn"
                onClick={() => {
                  const newObj = cloneInfo();
                  newObj.experience = newObj.experience.filter(
                    (exp) => exp.title + exp.company !== obj.title + obj.company
                  );
                  handleChange(newObj);
                }}
              >
                Delete
              </button>
              <p className="job-title">{obj.title}</p>
              <p className="job-location">{obj.location}</p>
              <p className="company">{obj.company}</p>
              <p className="job-length">
                {obj.start}-{obj.end}
              </p>
              <button type="button" className="edit-btn">
                Edit
              </button>
              <button
                type="button"
                className="edit-btn"
                onClick={() => {
                  const i = info.experience.findIndex(
                    (exp) => exp.title + exp.company === obj.title + obj.company
                  );
                  setExperience({
                    ...info.experience[i],
                    description: [...info.experience[i].description],
                  });
                  setExperienceEdit(i);
                  setPoints([...info.experience[i].description]);
                }}
              >
                Edit
              </button>
            </div>
          ))}
          <button
            type="button"
            className="add-btn"
            onClick={() => setExperienceEdit(info.experience.length)}
          >
            Add
          </button>
        </>
      )}
    </div>
  );
}
