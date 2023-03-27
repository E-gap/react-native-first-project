import { getDatabase, set, ref as ref2 } from "firebase/database";
import { uploadFotoToServer } from "./uploadFotoToServer";

export const uploadPostToServer = async (fotoUri) => {
  const photo = await uploadFotoToServer(fotoUri);
  console.log("fotouri", fotoUri);
  const createPost = console.log("Создаю пост");
  const userId = "5";
  const db = getDatabase();
  //console.log(db);
  set(ref2(db, "users/" + userId), {
    username: "22888888",
    email: "fffffff",
    profile_picture: "ffffkj",
    photoPost: photo,
  });
};
