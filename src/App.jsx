import Form from "./components/Form.jsx";
import Resume from "./components/Resume.jsx";
import { useState } from "react";

export default function App() {
  const [info, setInfo] = useState({
    personal: {
      name: "",
      email: "",
      number: "",
      address: "",
    },
    education: [
      {
        school: "Harvard University",
        degree: "Bachelor of Engineering",
        location: "'Murica",
        start: "2002",
        end: "2003",
      },
      {
        school: "Univeristy of Toronto",
        degree: "Bachelor of Science",
        location: "Montreal",
        start: "2020",
        end: "1982",
      },
    ],
    experience: [
      {
        title: "",
        company: "",
        location: "",
        start: "",
        end: "",
        description: [],
      },
    ],
  });

  return (
    <>
      <Form info={info} handleChange={(newInfo) => setInfo(newInfo)} />
      <Resume info={info} />
    </>
  );
}
