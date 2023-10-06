import React, {useState,useEffect} from "react";

export const Development = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        try{
            const getData = async () => {
                let requestOptions = {
                    method: "GET",
                    redirect: "follow",
                }
          
            // Fetching the data from dummy Api
            const res = await fetch("http://localhost:3030/development",requestOptions);
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
      <h1 className="development">Development</h1>
      {details.map((item) => (
        <div key={item.id}>
          <h3>
            <span>{item.id}</span> {item.title}
          </h3>
          <p>{item.body}</p>
          <p>{item.skill}</p>
        </div>
      ))}
    </div>
  );
}
