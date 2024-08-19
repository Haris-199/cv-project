import Banner from "./resume-components/Banner";
import '../styles/resume.css'

export default function Resume({ info }) {
  return (
    <div className="resume">
      <div className="page">
      <Banner>
        <p>{info.personal.name}</p>
      </Banner>

      </div>
    </div>
  );
}
