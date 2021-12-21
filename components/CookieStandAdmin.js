import Form from "./Form";
import React, { useState } from "react";
import hours from "../data";
import Main from "./Main";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CookieStandAdmin = () => {
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
      averageCookies: Number(event.target.avg.value),
      minCustomers: Number(event.target.min.value),
      maxCustomers: Number(event.target.max.value),
      hourly_sales: calculateCookie(
        event.target.min.value,
        event.target.max.value,
        event.target.avg.value
      ),
    };

    setCookiesData([...cookiesData, data]);
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

  return (
    <main>
      <Header />
      <Form cookiestand={createCookieStand} />

      <Main
        cookiesData={cookiesData}
        createCookieStand={createCookieStand}
        sumOfSums={sumOfSums}
      />
      <Footer standCounter={cookiesData.length} />
    </main>
  );
};

export default CookieStandAdmin;
