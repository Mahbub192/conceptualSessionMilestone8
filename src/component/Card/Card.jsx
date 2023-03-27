import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import SingleData from "../SingleData/SingleData";
import Button from "./Button";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const [singleUrl, setSingleUrl] = useState({});
  

  const sortByDate = () => {};
  const seeAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const value = await res.json();
      //   console.log(value.data.tools);
      setData(value.data.tools);
    };
    loadData();
  }, []);

  useEffect(() =>{
    const loadSingleUrl = async() =>{
        const rest = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        const data = await rest.json()
        setSingleUrl(data.data);
    }
    loadSingleUrl()
  },[uniqueId])
  return (
    <>
      <span onClick={sortByDate}>
        <Button>Sort By Date</Button>
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-12 my-6">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => {
          return (
            <SingleData
              singleData={singleData}
              key={singleData.id}
              setUniqueId={setUniqueId}
            />
          );
        })}
      </div>
      {!showAll && (
        <span onClick={seeAll}>
          <Button>See All</Button>
        </span>
      )}
      <Modal singleUrl = {singleUrl}></Modal>
    </>
  );
};

export default Card;
