import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DataDetails() {
  const [data, setData] = useState({});
  const [form, setForm] = useState({
    date: "",
    mood: "",
    sleep: "",
    activity: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const API = `http://localhost:8080/data?_id=${id}`;
    const res = await axios.get(API);
    setData(res.data[0]);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.date]: event.target.value });
  }

  async function handleUpdateData(event) {
    event.preventDefault();
    const body = {};

    for (const prop in form) {
      if (form[prop]) {
        body[prop] = form[prop];
      }
    }

    const API = `http://localhost:8080/data/${id}`;
    await axios.put(API, body);

    const newData = { ...data, ...body };
    setData(newData);
  }

  return (
    <div>
      <h2>{data.date}</h2>
      <p>{data.mood}</p>
      <p>{data.sleep}</p>
      <p>{data.activity}</p>
      <h3>Update details of Data</h3>
      <form onSubmit={handleUpdateData}>
        <input
          name="date"
          value={form.date}
          placeholder={data.date}
          onChange={handleChange}
        />
        <input
          name="mood"
          value={form.mood}
          placeholder={data.mood}
          onChange={handleChange}
        />
        <input
          name="sleep"
          value={form.sleep}
          placeholder={data.sleep}
          onChange={handleChange}
        />
        <input
          name="activity"
          value={form.activity}
          placeholder={data.activity}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
