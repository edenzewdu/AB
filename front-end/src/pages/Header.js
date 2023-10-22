import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
const Header = () => {
  return (
<eiv>
<lord-icon
        src="../Images/Lordicon/wired-flat-146-trolley.json"
        trigger="hover"
      ></lord-icon>
</eiv>
  )};

  export default  Header;