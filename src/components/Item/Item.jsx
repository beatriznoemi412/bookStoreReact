const Item = ({id, title, author, price, category, img, stock, description}) =>{



  return (
    <article className="CardItem">
       <header className="Header">
       <h2 className="ItemhHeader">
       {title}
       </h2>
       </header>

    <picture>
       <img src={img} alt={title} className="ItemImg"/>
    </picture>
    <section>
    <p className="Info">
      Category: {category}
    </p>
    <p className="Info">
      Author: {author}
    </p>
    <p className="Info">
      Price: {price}
    </p>
    <p className="Info">
      Stock: {stock}
    </p>
    <p className="Info">
      Description: {description}
    </p>
    </section>
    <footer className="ItemFooter">
     <button className="Option">Detalle</button>
    </footer>
    </article>
  )
}

export default Item