import "../styles/form.css";

export default function Form({ info , handleChange}) {
  function cloneInfo() {
    const newObj = { ...info };
    newObj.personal = { ...info.personal };
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
