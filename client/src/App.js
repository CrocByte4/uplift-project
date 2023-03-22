import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import DataDetails from "./DataDetails";

function App() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [form, setForm] = useState({
    date: "",
    mood: "",
    sleep: "",
    activity: "",
  });

  useEffect(() => {
    getData();
  }, [date]);

  async function getData() {
    let API = "http://localhost:8080/data";

    if (date !== "") {
      API = API + "?date=" + date;
    }
    const res = await axios.get(API);
    setData(res.data);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleAddData(event) {
    event.preventDefault();
    const API = "http://localhost:8080/data";
    const res = await axios.post(API, form);

    const newDataList = [...data, res.data];
    setData(newDataList);

    setForm({
      date: "",
      mood: "",
      sleep: "",
      activity: "",
    });
  }

  async function deleteData(id, date) {
    const confirmDelete = window.confirm(
      `Are you sure you want remove your ${date} data?`
    );
    if (confirmDelete) {
      const API = `http://localhost:8080/data/${id}`;
      const res = await axios.delete(API);
      console.log(res);
      getData();
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>Data</h1>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleDate={handleDate}
                date={date}
                data={data}
                deleteData={deleteData}
                handleAddData={handleAddData}
                form={form}
                handleChange={handleChange}
              />
            }
          />
          <Route path="/data/:id" element={<DataDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
