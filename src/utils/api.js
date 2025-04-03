import axios from "axios";
import content from "../data/content"; 

export const sendContentData = () => {
  axios
    .post("https://reqres.in/api/workintech", content) 
    .then((response) => {
      console.log("Başarılı: ", response.data);
    })
    .catch((error) => {
      console.error("Hata oluştu: ", error);
    });
};
