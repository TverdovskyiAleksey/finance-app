import { useState, useEffect } from 'react';
import { createArrCurrency } from './funcCreateArrCurrency';
import './Currency.scss';


export default function Currency() {
  const [USD, setUSD] = useState({ buy: '00.00', sale: '00.00' });
  const [EUR, setEUR] = useState({ buy: '00.00', sale: '00.00' });
  const [RUB, setRUB] = useState({ buy: '00.00', sale: '00.00' });

  useEffect(() => {
    createArrCurrency()
      .then(data => {
        data.forEach(({ ccy, buy, sale }) => {
          if (ccy === 'USD') {
            setUSD({ buy: buy, sale: sale });
          } else if (ccy === 'EUR') {
            setEUR({ buy: buy, sale: sale });
          } else if (ccy === 'RUR') {
            setRUB({ buy: buy, sale: sale });
          }
        });
      })
      .catch(err => err);
  }, []);

  return (
    <div className="currency" >
      <ul className="currency__title-list">
        <li className="currency__title">Валюта</li>
        <li className="currency__title">Покупка</li>
        <li className="currency__title">Продажа</li>
      </ul>

      <ul className="currency__price-list">
        <li className="currency__price">
          <span>USD</span>
          <span>{USD.buy}</span>
          <span>{USD.sale}</span>
        </li>
        <li className="currency__price">
          <span>EUR</span>
          <span>{EUR.buy}</span>
          <span>{EUR.sale}</span>
        </li>
        <li className="currency__price">
          <span>RUB</span>
          <span>{RUB.buy}</span>
          <span>{RUB.sale}</span>
        </li>
      </ul>
    </div>
  );
}


