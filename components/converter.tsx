import React from "react";

export default function Converter(){
  return (
    <div className="converter hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="select-option-1" >
            <select className="select select-info w-full max-w-xs">
              <option disabled selected>From:</option>
              <option>JSON</option>
              <option>YAML</option>
              <option>SQL</option>
              <option>VERSE</option>
            </select>
          </div>
          <div className="select-option-1" >
          <select className="select select-info w-full max-w-xs">
              <option disabled selected>To:</option>
              <option>JSON</option>
              <option>YAML</option>
              <option>SQL</option>
              <option>VERSE</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}