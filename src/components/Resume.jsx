import "../styles/resume.css";

export default function Resume({ info }) {
  return (
    <div className="resume">
      <div className="page">
        <div className="banner">
          <p>{info.personal.name}</p>
        </div>
        <p className="contact">
          {info.personal.email && <span className="email">{info.personal.email}</span>}
          {info.personal.number && <span className="number">{info.personal.number}</span>}
        </p>
      </div>
    </div>
  );
}
