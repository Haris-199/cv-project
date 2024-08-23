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
        school: "",
        degree: "",
        location: "",
        start: "",
        end: "",
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
