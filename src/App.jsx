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
    education: [],
    experience: [
      {
        title: "Batman",
        company: "Wayne Enterprises",
        location: "Gotham City",
        start: "1900",
        end: "1801",
        description: ["Saved people.", "Helped peoples."],
      },
      {
        title: "Spiderman",
        company: "n/a",
        location: "New York City",
        start: "2020",
        end: "2021",
        description: ["Did a lot of cool hardwork such as saving people.", "Did stuff adjsksajlk kasjdlkasjdlk saouyd asudh  sajdh askj fehua hsdkhas kjd.", "Haris is cool."],
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
