//첫번째 인자는 템플릿, 두번째는 템플릿에 들어가는 정보
//export const home = (req, res) => res.render("home", { pageTitle: 'Home' });

import { videos } from "../db";

//default를 export 할땐 이렇게 한다.
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const{
    body:{
      file,
      title,
      description
    }
  }  = req;
  //To Do : Upload and save video
  res.redirect(routes.videoDetail(324393))
}

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });