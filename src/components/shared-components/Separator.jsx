import PropTypes from 'prop-types';

const Separator = ({ color1, color2, height }) => {
  return (
    <div
      className="separator-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        marginTop: '10px',
        zIndex: '-1',
      }}
    >
      <div
        className="separator"
        style={{
          width: '2px',
          height,
          background: `linear-gradient(to bottom, ${color1}, ${color2})`,
        }}
      ></div>
    </div>
  );
};

Separator.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Separator;
