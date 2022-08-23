import axios from "axios";
//import { getCookie } from "../api/cookie";
// axios.create는 나만의 엑시오스 인스턴스를 만드는 메서드이다.
const api = axios.create({
  //baseurl에는 반복되는 url을 넣어준다.
  baseURL: "http://43.200.177.45/api",
  //추가로 넣어야하는 옵션들을 넣어주면 되는데, 나는 헤더만 필요하여 헤더를 넣어주었다.
  //   headers: { authorization: `Bearer ${getCookie("is_login")}` },
});
export default api; //익스포트 잊지않긔
