import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={require("../assets/profile_pic.jpg")}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Danny Mendez</div>
              <div className="brief_description">
                Hello everyone, my name is Danny and i'm please to meet you. my hobbies
                include reading and watching TV shows. I Also practice programmming everday.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}