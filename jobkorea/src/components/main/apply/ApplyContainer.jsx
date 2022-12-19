import axios from "axios";
import ApplyComponent from "./ApplyComponent";
import { useEffect, useState } from "react";

export default function ApplyContainer() {
  const [test, setTest] = useState("");
  useEffect(() => {
    try {
      axios
        .post("http://localhost:8080/api/apply/jobApplication", { test })
        .then((item) => {
          console.log(item.data);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <ApplyComponent></ApplyComponent>;
}
