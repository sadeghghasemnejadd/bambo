const Advise = ({ title, description, src, alt, children }) => {
  return (
    <div className="advise-container">
      <div className="advise-container__header">
        <h2 className="advise-container__heading">{title}</h2>
        <p className="advise-container__description">{description}</p>
      </div>
      <div className="advise-container__image-container">
        {children}
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Advise;
