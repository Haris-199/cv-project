import "../styles/resume.css";

export default function Resume({ info }) {
  return (
    <div className="resume">
      <div className="page">
        <div className="banner">
          <p>{info.personal.name ? info.personal.name : String.fromCharCode(160)}</p>
        </div>
        <div className="text-margin">
          { (info.personal.email || info.personal.number || info.personal.address) &&
            <div className="contact">
              {info.personal.email && <p><span className="email-icon icon"></span>{info.personal.email}</p>}
              {info.personal.number && <p><span className="number-icon icon"></span>{info.personal.number}</p>}
              {info.personal.address && <p><span className="address-icon icon"></span>{info.personal.address}</p>}
            </div>
          }

          {info.education.length > 0 && <h2 className="seperator">Education</h2>}
          <div className="education-list">
            {info.education.map((obj) =>
              <div key={obj.school + obj.degree} className="edu-item">
                <p><strong>{obj.school}</strong></p>
                <p>{obj.location}</p>
                <p><strong>{obj.degree}</strong></p>
                <p>{obj.start}-{obj.end}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
