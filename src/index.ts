import "./styles/style.css";
import "./styles/style.less";
import "./styles/style.scss";
import image from "./images/logo.png";
import { formData } from "./forms";

// ! this is definitly gonna be found
const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});

const imageAddress = <HTMLImageElement>document.querySelector(".img img")!;
imageAddress.src = image;
