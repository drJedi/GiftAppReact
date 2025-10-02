import React from 'react';

const ProductCard = ({ product, moduleName = "product-card" }) => {
  const dataModLog = `${moduleName}#-1#${product.name}#${product.globalName}`;
  
  return (
    <div className="product-card" >
      <a className="product-card__link" href={product.link} target="_self" rel="noopener noreferrer" data-mod-log={dataModLog}>
        <img className="product-card__image" src={product.src} alt={product.name} />
        <h3 className="product-card__name">{product.name}</h3>
        {/* <p className="product-card__desc">{product.description}</p> */}
      </a>
    </div>
  );
};

export default ProductCard;