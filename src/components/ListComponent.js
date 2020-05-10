import React, { useState, useEffect } from "react";

const ListComponent = () => {
  const [content, setContent] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const rec = await fetch("/api/list");
      const data = await rec.json();
      setContent(
        data.map((ele) => {
          return ele.name;
        })
      );
    }
    fetchData();
    //   .then((items) => setItems(items))
    //   .then(setLoader(false))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid">
      {content.map((ele) => (
        <div className="row">
          <div className="col-12">
            <div className="card text-white bg-info mb-3"></div>

            <div className="card-block">
              <div className="card-title">
                <h4 key={Math.random()}>{ele}</h4>
              </div>
              <br />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListComponent;
