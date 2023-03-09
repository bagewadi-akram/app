import emailjs from "@emailjs/browser";

async function Mail({ token, temp }) {
  const Link = `http://localhost:8080/${temp.u_fname}?token=${token}&&=${temp._id}`;
  const details = {
    to_name: temp.u_fname,
    to_email: temp.u_email,
    message: Link,
  };
  try {
    emailjs
      .send("service_esgb2xh", "template_s80hw1h", details, "-1-RiWBAkpsvNI7GR")
      .then(
        (result) => {
          console.log("message sent");
          return result;
        },
        (error) => {
          console.log(error.text);
          return error;
        }
      );
  } catch (error) {
    console.log("error :>> ", error);
    return error;
  }
}
export default Mail;
