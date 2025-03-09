import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data';

const Tour = (props) => {
    let classValue = props.destacado ? "single-tour destacado" : "single-tour"
    return (
        <article key={props.id} id={props.id} className={classValue}>
            <img src={props.image} alt={props.name}/>
            <footer>
                <div className="tour-info">
                    <h4>{props.name}</h4>
                    <h4 className="tour-price">{props.price}€</h4>
                </div>
                <p>{props.info}</p>
            </footer>
        </article>
    )
}

const MainComp = () => {
    let destacados = 0
    let tours = []
    for (const tour of data) {
        tours.push(Tour(tour))
        if (tour.destacado) destacados++
    } 

    return (
        <main>
        <section>
          <div className="title">
            <h2>Nuestros tours</h2>
            <div className="underline"></div>
            <h3>Tenemos {destacados} tour destacados</h3>
          </div>
          <div>{tours}</div>
        </section>
      </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainComp />);
