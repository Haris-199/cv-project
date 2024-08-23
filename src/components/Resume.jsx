import "../styles/resume.css";

export default function Resume({ info }) {
  return (
    <div className="resume">
      <div className="page">
        <div className="banner">
          <p>{info.personal.name ? info.personal.name : String.fromCharCode(160)}</p>
        </div>
        <div className="contact">
            {info.personal.email && <p><span className="email-icon icon"></span>{info.personal.email}</p>}
            {info.personal.number && <p><span className="number-icon icon"></span>{info.personal.number}</p>}
            {info.personal.address && <p><span className="address-icon icon"></span>{info.personal.address}</p>}
        </div>
      </div>
    </div>
  );
}
