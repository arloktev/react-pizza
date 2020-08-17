import React, { useEffect, useState } from "react";
import Categories from "../components/categories/categories";
import Sort from "../components/sort/sort";
import PizzaBlock from "../components/pizza-block/pizza-block";
import Axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get('/db.json')
      .then((res) => {
        setData(res.data.pizzas);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            !!data &&
            data.map((item) => {
              return (
                <PizzaBlock
                  {...item}
                  key={item.id}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
