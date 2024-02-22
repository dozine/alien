export function NextArrow(props) {
  const { onClick } = props;
  console.log(props);
  if (props.currentSlide == 7) {
    window.location.href = "/itemregister";
  }

  return (
    <button
      style={{
        border: "none",
        borderRadius: "20px",
        backgroundColor: "#E7D1F5",
        width: "90px",
        height: "45px",
        color: "black",
        fontSize: "20px",
        position: "absolute",
        right: "40%",
        bottom: "8%",
      }}
      onClick={onClick}
    >
      SKIP
    </button>
  );
}

export function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      style={{
        border: "none",
        borderRadius: "100px",
        backgroundColor: "#23AA49",
        width: "106px",
        height: "53px",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        position: "absolute",
        bottom: "2%",
        right: "2%",
      }}
      onClick={onClick}
    >
      이전
    </button>
  );
}
