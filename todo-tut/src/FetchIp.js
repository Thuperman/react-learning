import React, {useState, useEffect} from 'react';




const FetchIp = () => {
    const [ip, setIp] = useState("0.0.0.0")
  
    useEffect(() => {
        const getIp = async () => {
            let response = await fetch('https://api.ipify.org/?format=json');
            let data = await response.json();
            setIp(data);
        };
        getIp();      
        // .then(data => console.log(data))
        // .catch(err => console.log(err))
    });
    return(
      <p>{ip.ip}</p>
    )
  }

  export default FetchIp;


//   const fetchIp = async () => {
//   let response = await fetch('https://api.ipify.org/?format=json');
//   let data = await response.json();
//   return data;
//     // .then(response => response.json())
//     // .then(data => {
//     //   console.log(data.ip);
//     //   this.setState
//     // })
//   }
//   fetchIp()


// const getIp = async () => {
//     let response = await fetch('https://api.ipify.org/?format=json');
//     let data = await response.json();
//     setIp(data);
// };