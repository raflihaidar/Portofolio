import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const skills = [
    {
      name: " Vanila js",
      progress: 90,
    },
    {
      name: "C/C++",
      progress: 90,
    },
    {
      name: "React js",
      progress: 85,
    },
    {
      name: "Vue js",
      progress: 70,
    },
  ];

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      neutral: {
        main: "#D32F2F",
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="w-4/5 md:w-2/5 m-auto flex flex-col justify-between gap-y-10">
        <div className="text-center text-3xl font-semibold" id="Skills">
          Skills
        </div>
        <div>
          {skills.map((item) => (
            <div className="mb-4">
              <p className="font-semibold">{item.name}</p>
              <Box sx={{ width: "100%" }}>
                <LinearProgressWithLabel
                  value={item.progress}
                  className="p-3"
                  color="neutral"
                />
              </Box>
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}
