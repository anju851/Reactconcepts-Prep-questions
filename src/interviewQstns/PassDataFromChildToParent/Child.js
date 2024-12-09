const Child = ({ setColored }) => {
  return (
    <div
      style={{
        border: "solid",
        width: "250px",
        height: "100px",
        marginLeft: "50px",
        backgroundColor: "white",
      }}
    >
      <p>Child</p>
      <input
        style={{ marginLeft: "30px" }}
        onChange={(e) => setColored(e.target.value)}
      />
    </div>
  );
};

export default Child;
