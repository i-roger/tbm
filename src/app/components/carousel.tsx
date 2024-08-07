export default function Carousel() {
  return (
    <div style={carouselStyles.container} className="container">
      <div style={carouselStyles.box} className="m4">...</div>
      <div style={carouselStyles.box} className="box">...</div>
      <div style={carouselStyles.box} className="box">...</div>
      <div style={carouselStyles.box} className="box">...</div>
      <div style={carouselStyles.box} className="box">...</div>
      <div style={carouselStyles.box} className="box">...</div>
    </div>
  );
}

const carouselStyles = {
    container: {
        overflow: 'auto',
        display: 'flex',
        justifyCenter: 'center',
        alignItems:'center',
        scrollSnapType: 'x mandatory',
        width: 200,
        height: 300,

    },
    box: {
        height: 200,
        width: 200,
        background: 'red',
        marginRight: '5px',
        flexShrink: 0,
        scrollSnapAlign: 'start',

    }
}