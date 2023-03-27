import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export const uploadFotoToServer = async (fotoUri) => {
  if (!fotoUri) return;
  try {
    const response = await fetch(fotoUri);
    const file = await response.blob();
    const unicPostId = Date.now().toString();
    const reference = ref(storage, `images/${unicPostId}`);
    const result = await uploadBytesResumable(reference, file);

    const urlFoto = await getDownloadURL(result.ref);
    console.log(urlFoto);
    return urlFoto;
  } catch (err) {
    console.log("Try again \n", err.message);
  }
};
