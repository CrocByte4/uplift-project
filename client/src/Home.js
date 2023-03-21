export default function Home({
  handleLocation,
  location,
  data,
  deleteData,
  handleAddData,
  form,
  handleChange,
}) {
  return (
    <div>
      <input
        onChange={handleLocation}
        value={location}
        placeholder="Filter by Location"
      />
      {data.map((data, index) => {
        return (
          <div key={index}>
            <h3>{data.date}</h3>
            <p>mood: {data.mood}</p>
            <p>sleep: {data.sleep}</p>
            <p>activity: {data.activity}</p>
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
          placeholder="Date"
        />
        <input
          name="mood"
          value={form.mood}
          onChange={handleChange}
          placeholder="Mood"
        />
        <input
          name="sleep"
          value={form.sleep}
          onChange={handleChange}
          placeholder="Sleep"
        />
        <input
          name="activity"
          value={form.activity}
          onChange={handleChange}
          placeholder="Activity"
        />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}
