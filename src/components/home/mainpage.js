import "./home.css";
import MainCard from "./mainCard";
import { useState } from "react";
import HomeList from "./homeList";
import NavButtons from "../atoms/navButtons";
import { Link } from "react-router-dom";

function MainPage() {
  const [topContent, setTopContent] = useState([
    {
      title: "Liked Songs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzWWypc2RrvdQhLmIbXa0zEfS-zA5xVogGg&usqp=CAU",
    },
    {
      title: "One Direction",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPoTApf70P_qAhGsHGt_DYoBM9tr8OBRTsA&usqp=CAU",
    },
    {
      title: "Liked Songs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzWWypc2RrvdQhLmIbXa0zEfS-zA5xVogGg&usqp=CAU",
    },
    {
      title: "One Direction",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPoTApf70P_qAhGsHGt_DYoBM9tr8OBRTsA&usqp=CAU",
    },
    {
      title: "Liked Songs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzWWypc2RrvdQhLmIbXa0zEfS-zA5xVogGg&usqp=CAU",
    },
    {
      title: "One Direction",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPoTApf70P_qAhGsHGt_DYoBM9tr8OBRTsA&usqp=CAU",
    },
  ]);
  return (
    <div className="main-home">
      <div className="header">
        <NavButtons />
        <Link to="/signin"><div className="user-container">sreenath sharma</div></Link>
      </div>
      <div className="main-top">
        <h1>Good evening</h1>
        <div className="main-cards-container">
          {topContent.map((element) => (
            <MainCard data={element} />
          ))}
        </div>
      </div>
      <HomeList />
      <HomeList />
      <HomeList />
      <HomeList />
      <HomeList />
    </div>
  );
}

export default MainPage;
