import "../styles/resume.css";

export default function Resume({ info }) {
  return (
    <div className="resume">
      <div className="page">
        <div className="banner">
          <p>{info.personal.name ? info.personal.name : String.fromCharCode(160)}</p>
        </div>
        <p className="contact">
          {info.personal.email && <span className="email-icon icon">{info.personal.email}</span>}
          {info.personal.number && <span className="number-icon icon">{info.personal.number}</span>}
          {info.personal.address && <span className="address-icon icon">{info.personal.address}</span>}
        </p>
      </div>
    </div>
  );
}
