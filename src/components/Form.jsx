import "../styles/form.css";

export default function Resume() {
  return (
    <div className="form">
      <form action="">
        <div className="personal">
          <h2>Personal Information</h2>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="number">Phone Number</label>
          <input type="tel" name="number" id="number" />
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
