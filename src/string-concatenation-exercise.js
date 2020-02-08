import "./styles.css";

// document.getElementById("app").innerHTML = html;

const name = "Tushar Mehrotra";
const job = "Frontend Engineer";
const city = "Bangalore";
const country = "India";

let html;

html =
  "<ul><li>" +
  name +
  "</li><li>" +
  job +
  "</li><li>" +
  city +
  "</li><li>" +
  country +
  "</li></ul>";

html = `<ul>
        <li>${name} </li>
        <li>${job} </li>
        <li>${city} </li>
        <li>${country} </li>
      </ul>`;
document.getElementById("app").innerHTML = html;
