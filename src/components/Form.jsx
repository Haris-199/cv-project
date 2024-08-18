import { useState } from "react";
import "../styles/form.css";

export default function Resume() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    number: "",
  });

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
            value={personalInfo.name}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, name: e.target.value })
            }
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={personalInfo.email}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, email: e.target.value })
            }
          />

          <label htmlFor="number">Phone Number</label>
          <input
            type="tel"
            name="number"
            id="number"
            value={personalInfo.number}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, number: e.target.value })
            }
          />
        </div>

        <div className="education">
          <h2>Education</h2>
        </div>

        <div className="experience">
          <h2>Experience</h2>
        </div>
      </form>
    </div>
  );
}
