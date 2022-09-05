import request from "@/utils/request";
import * as axios from "axios";

export async function getList() {
  console.log("entrou no getList");
  await axios
    .get("http://localhost:5478/statusaprovacao")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      // Handle error
      console.log(err);
    });
}
