export function ProductIdentity({ product }) {
  return <div className="detail-identity">
    <img className="detail-app-icon" src={product.icon} width="56" height="56" alt="" />
    <h1 id="detail-title">{product.name}</h1>
  </div>;
}

export function ProductFeatures({ title, features }) {
  return <section className="detail-features" id="features" aria-labelledby="detail-features-title">
    <div className="detail-section-heading">
      <p className="detail-eyebrow">Features</p>
      <h2 id="detail-features-title">{title}</h2>
    </div>
    <div className="detail-feature-grid">
      {features.map(([heading, description]) => <article className="detail-feature" key={heading}>
        <h3>{heading}</h3><p>{description}</p>
      </article>)}
    </div>
  </section>;
}
