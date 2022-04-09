import axios from "axios";

const KEY = "AIzaSyDBAZzXMZh_o-KzGLyGt6xxFV_oSOIHPHU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
