import React from 'react';

export default function Home({ members, galleries }) {
    return (
        <div style={{ fontFamily: 'sans-serif' }}>
          <nav className="bg-gray-800 p-4 text-white flex justify-between items-center  ">
            <ul className="flex space-x-4">
                <p>ini nama website</p>
            </ul>
            <ul className="flex space-x-4">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
    );
}