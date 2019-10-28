import express from "express";
import routes from "../routes";
import { 
    videoDetail, 
    editVideo, 
    deleteVideo, 
    postUpload,
    getUpload
} from "../controller/videoController";

const videoRouter = express.Router();

// videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload)
//함수는 ()로 실행시켜줘야 한다. 안그럼 404 에러가 뜸.
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);


//videoRouter 전체를 export 하겠다는 의미
export default videoRouter;