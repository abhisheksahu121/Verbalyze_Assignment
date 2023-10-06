import React, {useState,useEffect} from "react";

export const Alanai = () => {
    const [details, setDetails] = useState([]);
  
  useEffect(() => {
    try{
        const getData = async () => {
            let requestOptions = {
                method: "GET",
                redirect: "follow",
            }
        // Fetching the data from dummy Api
        const res = await fetch("http://localhost:3030/alanai",requestOptions);
        const data = await res.json();
        setDetails(data);
      };
      getData();
    } catch(err) {
        console.log(`Unable to fetch the data ${err}`);
    }
  }, []);

  return (
    <div>
      <h1 className="alanai">Alanai</h1>
      {details.map((item) => (
        <div key={item.id}>
          <h3>
            <span>{item.id}</span> {item.title}
          </h3>
          <p>{item.body}</p>
          <p>{item.part1}</p>
          <p>{item.part2}</p>
          <p>{item.part3}</p>
        </div>
      ))}
    </div>
  );
}
