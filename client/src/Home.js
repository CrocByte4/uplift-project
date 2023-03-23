export default function Home({
  handleDate,
  date,
  data,
  deleteData,
  handleAddData,
  form,
  handleChange,
}) {
  return (
    <div class="display">
      <h1>Your Tracker</h1>
      <input
        onChange={handleDate}
        value={date}
        placeholder="Find By Date (dd/mm/yyyy)"
      />
      {data.map((data, index) => {
        return (
          <div key={index}>
            <h3>{data.date}</h3>
            <p>Mood: {data.mood}</p>
            <p>Sleep: {data.sleep}</p>
            <p>Activity: {data.activity}</p>
            <span onClick={() => deleteData(data._id, data.date)}>X</span>
          </div>
        );
      })}
      <h2>Add Data</h2>
      <form onSubmit={handleAddData}>
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          placeholder="Date (dd/mm/yyyy)"
        />
        <input
          name="mood"
          value={form.mood}
          onChange={handleChange}
          placeholder="Mood (1-10)"
        />
        <input
          name="sleep"
          value={form.sleep}
          onChange={handleChange}
          placeholder="Sleep (hours)"
        />
        <input
          name="activity"
          value={form.activity}
          onChange={handleChange}
          placeholder="Activity (hours)"
        />
        <button type="submit">Upload data ⬆️📁</button>
      </form>
    </div>
  );
}
