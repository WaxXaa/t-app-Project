import "./cards.css"

const MiniCard = ({ img, city, country }) => {
  if (img && city && country) {
    return (
      <>
        <section className="mini-card">
          <div className="mini-card-img-container"><img className="mini-card-img" src={img} alt="card-img" /></div>
          <div className="mini-card-data">
            <h4 className="mini-card-title">{`${city}, ${country}`}</h4>

          </div>
        </section>
      </>
    )
  } else {
    return (
      <>
        <section className="mini-card">
          <div className="mini-card-img-container"></div>
          <h4 className="mini-card-title"></h4>
          <p className="mini-card-stars"></p>
        </section>
      </>
    )
  }

}
export default MiniCard