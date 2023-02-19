import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <div className="w-4/5 m-auto text-center my-44" id="Contact">
      <div className="text-3xl font-semibold mb-5">Contact</div>
      <div>
        Whetever you have a question or just want to say hi, i'll try my best
        get back to you!
      </div>
      <div>
        <div className="flex justify-center gap-5 p-5">
          <a href="https://github.com/raflihaidar">
            <GitHubIcon sx={{ "&:hover": { color: "crimson" } }}></GitHubIcon>
          </a>
          <a href="https://www.instagram.com/raflihaidar_n/">
            <InstagramIcon
              sx={{ "&:hover": { color: "crimson" } }}
            ></InstagramIcon>
          </a>
          <a href="mailto:rafli.haidar30@gmail.com">
            <EmailIcon sx={{ "&:hover": { color: "crimson" } }}></EmailIcon>
          </a>
          <a href="https://www.linkedin.com/in/rafli-haidar-nashif-48247a248/">
            <LinkedInIcon
              sx={{ "&:hover": { color: "crimson" } }}
            ></LinkedInIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
