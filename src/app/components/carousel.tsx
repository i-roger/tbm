export default function Carousel() {
  return (
    <div style={carouselStyles.container} className="">
      <div>
        <div style={carouselStyles.box} className="p-4">
          IMAGE
        </div>
        <p className="text-black font-bold px-4 pt-2">Teste</p>
      </div>
      <div>
        <div style={carouselStyles.box} className="p-4">
          IMAGE
        </div>
        <p className="text-black font-bold px-4 pt-2">Teste</p>
      </div>
      <div>
        <div style={carouselStyles.box} className="p-4">
          IMAGE
        </div>
        <p className="text-black font-bold px-4 pt-2">Teste</p>
      </div>
      <div>
        <div style={carouselStyles.box} className="p-4">
          IMAGE
        </div>
        <p className="text-black font-bold px-4 pt-2">Teste</p>
      </div>
      <div>
        <div style={carouselStyles.box} className="p-4">
          IMAGE
        </div>
        <p className="text-black font-bold px-4 pt-2">Teste</p>
      </div>
    </div>
  );
}

const carouselStyles = {
  container: {
    overflow: "auto",
    display: "flex",
    justifyCenter: "center",
    alignItems: "center",
    scrollSnapType: "x mandatory",
    width: 250,
    height: 300,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 200,
    background: 'rgb(24 24 27)',
    marginRight: "5px",
    flexShrink: 0,
    scrollSnapAlign: "center",
    borderRadius: "30px",
  },
};
