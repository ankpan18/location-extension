import React, { useEffect, useState } from "react";

const Location = () => {
  const [loading, setLoading] = useState(false)
  const [desc, setDesc] = useState("Show my Location")
  const [data, setData] = useState("")
  const [loc, setLoc] = useState({})
  const [error, setError] = useState(false)
  const handleClick = () => {
    if(loading==false)
    {
    setLoading(true)
    }
    // setDesc("Loadin..")
  }
  const fetchData = async () => {
    const response = await fetch("https://api64.ipify.org/?format=json")
    const jsonData = await response.json()
    setData(jsonData)
    return jsonData
  }

  const fetchLocation = async () => {
    const jsonData = await fetchData()
    console.log("jsonData:",jsonData);
    const response = await fetch(
      `https://ipinfo.io/${jsonData["ip"]}?token=706b32a27c061b`
    )
    const locationData = await response.json()
    setLoc(locationData);
    return locationData;
    
  }

  useEffect(() => {
    if (loading === true) {
      //setLoading(true);
      setError(false);
      setLoc({})
      setDesc("Loading...")
      fetchLocation().then((locationData) => {
        console.log("locationData:",locationData);
        if(locationData.hasOwnProperty("error"))
        {
          console.log("working");
          setError(true);
        }
        setLoading(false);
      })
    } else {
      //setLoading(false);
      setDesc("Show my Location")
    }
  }, [loading])

  return (
    <>
      <div className="bg-yellow-200 text-lg">
        {" "}
        {loading || JSON.stringify(loc)==="{}"? (
          <></>
        ) : (
          error? (<h2>Error: {loc["error"]["title"]} {loc["error"]["message"]} </h2>): (
            <h2>
              My Country name is {loc["country"]} and city is {loc["city"]}{" "}
              {JSON.stringify(loc)}{" "}
            </h2>
          )
        )}
        
      </div>
      <div className="h-screen bg-yellow-200 w-full flex justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleClick}>
          {desc}
        </button>
      </div>
      <div />
    </>
  )
}

export default Location
