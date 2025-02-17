import "./StyleSection.css";

function StyleSection() {
  const styles = [
    { title: "Casual", image: "/styles/casual.jpg" },
    { title: "Formal", image: "/styles/formal.jpg" },
    { title: "Athletic", image: "/styles/athletic.jpg" },
  ];

  return (
    <section className="style-section">
      <h2 className="section-title">Shop by Style</h2>
      <div className="style-grid">
        {styles.map((style) => (
          <div key={style.title} className="style-card">
            <div
              className="style-image"
              style={{ backgroundImage: `url(${style.image})` }}
            >
              <h3>{style.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StyleSection;
