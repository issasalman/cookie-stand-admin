import Form from "./Form";
import React, { useState, useEffect } from "react";
import hours from "../data";
import Main from "./Main";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_COOKIES_API;
const responsesEndPoint = baseUrl + "api/v1/cookie_stands/";

const CookieStandAdmin = (props) => {
  const [cookiesData, setCookiesData] = useState([]);
  const [sumOfSums, setSumOfSums] = useState([]);

  const calculateCookie = (min, max, avg) => {
    let hourly_sales = [];
    for (let i = 0; i < hours.length; i++) {
      let random =
        Math.floor(
          Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min)
        ) * avg;
      hourly_sales.push(random);
    }
    console.log(hourly_sales);
    return hourly_sales;
  };
  const createCookieStand = (event) => {
    event.preventDefault();

    const data = {
      location: event.target.location.value,
      id:cookiesData.length,
      owner:1,
      average_cookies_per_sale: Number(event.target.avg.value),
      minimum_customers_per_hour: Number(event.target.min.value),
      maximum_customers_per_hour: Number(event.target.max.value),
      hourly_sales: calculateCookie(
        event.target.min.value,
        event.target.max.value,
        event.target.avg.value
      ),
    };


    const configPost = {
      method: "POST",
      url: responsesEndPoint,
      headers: { Authorization: `Bearer ${props.token}` },
      data: data,
    };

    axios(configPost).then(res=>{
      setCookiesData([...cookiesData,res.data]);


      });;

    // setCookiesData([...cookiesData, data]);

    let arr1 = [];
    let megaSum = 0;
    for (let i = 0; i < hours.length; i++) {
      let sum = 0;

      for (let j = 0; j < cookiesData.length; j++) {
        sum += cookiesData[j].hourly_sales[i];
      }

      sum += data.hourly_sales[i];
      megaSum += sum;
      arr1.push(sum);
    }
    setSumOfSums([...arr1, megaSum]);
  };

  useEffect(() => {
    if (props.token) {
      getRepliesFromAPI();
    }
  }, [props.token]);

  var storeData;
  const getRepliesFromAPI = async () => {
    console.log("hiii");

    const config = { headers: { Authorization: "Bearer " + props.token } };
    axios.get(responsesEndPoint, config).then((res) => {
      console.log("hiiiia", res.data);

      // let arr2 = [];
      // res.data.map((item) => {
      //   storeData = {
      //     id: item.id,
      //     location: item.location,
      //     avg: item.average_cookies_per_sale,
      //     min: item.minimum_customers_per_hour,
      //     max: item.maximum_customers_per_hour,
      //     hourly_sales: item.hourly_sales,
      //   };
      //   arr2.push(storeData);

      //   return res.data;
      // });

      let arr1 = [];
      let megaSum = 0;
      for (let i = 0; i < hours.length; i++) {
        let sum = 0;

        for (let j = 0; j < res.data.length; j++) {
          sum += res.data[j].hourly_sales[i];
        }

        megaSum += sum;
        arr1.push(sum);
      }
      setCookiesData(res.data);

      setSumOfSums([...arr1, megaSum]);
    });
  
  };

  const deleteHandler =  (id) => {
    const configDelete = {
      method: "DELETE",
      url: `${process.env.NEXT_PUBLIC_COOKIES_API}api/v1/cookie_stands/${id}`,
      headers: { Authorization: `Bearer ${props.token}` },
    };
  
     axios(configDelete).then(res=>{
      getRepliesFromAPI()


      });


  };
  return (
    <main>
      <Header />
      <Form cookiestand={createCookieStand} />

      <Main
        cookiesData={cookiesData}
        createCookieStand={createCookieStand}
        sumOfSums={sumOfSums}
        deleteHandler={deleteHandler}
      />
      <Footer standCounter={cookiesData.length} />
    </main>
  );
};

export default CookieStandAdmin;
