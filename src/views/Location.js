import React from 'react';
import './location.css'

export default function Location () {
    return(
        <div className="single-loc-container">
          <div className="left-col">
            <h2>Location name</h2>
            <div>
              <img className="loc-image" src="https://source.unsplash.com/lWGRG9_RQHg/1600x900" />
            </div>
            <div className="loc-item-container">
              <h4>Address</h4>
              <p>28 Avenue des Chardonnerets, 33320 le Taillan</p>
            </div>
            <div className="loc-item-container">
              <h4>Description</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            
          </div>
          <div className="right-col">

          </div>

        </div>
      );
}