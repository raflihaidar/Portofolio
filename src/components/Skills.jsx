import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const skills = [
    {
      name: " Vanila Javascript",
      progress: 90,
    },
    {
      name: "C/C++",
      progress: 90,
    },
    {
      name: "React Javascript",
      progress: 85,
    },
    {
      name: "Vue Javascript",
      progress: 70,
    },
  ];

  return (
    <div className="w-4/5 md:w-2/5 m-auto flex flex-col justify-between gap-y-10">
      <div className="text-center text-3xl font-semibold" id="Skills">
        Skills
      </div>
      <div>
        {skills.map((item) => (
          <div className="mb-4">
            <p className="font-semibold">{item.name}</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgressWithLabel value={item.progress} className="p-3" />
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
}
