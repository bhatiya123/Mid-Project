import React from "react";

const medicalData = [
  {
    id: 1,
    title: "Blood Group Collection",
    image: require("../../components/assets/c111.jpg"),
  },
  {
    id: 2,
    title: "Free Group Checking",
    image: require("../../components/assets/c222.jpg"),
  },
  {
    id: 3,
    title: "Blood Donation Camp",
    image: require("../../components/assets/c333.jpg"),
  },
  {
    id: 4,
    title: "Free Group Checking",
    image: require("../../components/assets/c444.jpg"),
  },
  {
    id: 5,
    title: "Blood Donation Camp",
    image: require("../../components/assets/c111.jpg"),
  },
  {
    id: 6,
    title: "Blood Group Collection",
    image: require("../../components/assets/c222.jpg"),
  },
];

const Camopaign3 = () => {
  return (
    <div>
    <div className="c3-title">
            <p className="c3-title1">DONATE NOW</p>
            <p className="c3-title2">Popular Campaigns</p>
        </div>
    <div className=" container medical-grid">
        
      {medicalData.map((item) => (
        <div key={item.id} className="medical-card">
          <img src={item.image} alt={item.title} className="medical-image" />
          <div className="date-label">13 Feb</div>
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      ))}
      <style jsx>{`
        .medical-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap:50px;
          margin-left:200px;
          width:600px;
          margin-bottom:80px;
        }
        .medical-card {
          position: relative;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width:550px;
          height:500px;
          border:15px solid white;
        }
        .medical-image {
          width: 100%;
          height: 275px;
          object-fit: cover;
        }
        .date-label {
          position: absolute;
          top: 8px;
          left: 8px;
          background-color: #e53e3e;
          color: white;
          font-size: 15px;
          font-weight: bold;
          padding: 4px 8px;
          border-radius: 4px;
        }
        .card-content {
          padding: 1rem;
        }
        .card-title {
          font-size: 25px;
          font-weight: 700;
          padding:20px 0px;
        }
        .card-text {
          font-size: 17px;
          color: #4a5568;
        }
        @media (max-width: 640px) {
          .medical-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .medical-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .c3-title1{
            color:rgb(236, 38, 38);
            display:flex;
            justify-content:center;
            align-items:center;
            margin:20px 0px;
            font-size:20px;
            font-weight:600;
        }
        .c3-title2{
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:40px;
            font-weight:700;
            margin-bottom:40px;
        }
      `}</style>
    </div>
    </div>
  );
};

export default Camopaign3;
