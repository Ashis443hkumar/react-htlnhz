import React from 'react';
import HomeService from '../home/service/HomeService';

import Sdata from './Sdata';
import './service.css';

export default function Service() {
  return (
    <>
      <HomeService />

      <div className="heroService">
        {Sdata.map((val) => (
          <div className="hero-box">
            <i class="fa-brands fa-servicestack"></i>
            <h4>{val.name}</h4>
            <p>{val.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
