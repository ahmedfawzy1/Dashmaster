import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header/Header";

export default function Faq() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Header title={"FAQ"} subTitle={"Frequently Asked Questions Page"} IsHomePage={false} />
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Operations Hub</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A centralized platform to streamline all business operations, offering real-time insights and control over your business processes.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Insight Central</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your go-to dashboard for comprehensive data analysis, providing actionable insights to drive smarter business decisions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Efficiency Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Maximize your productivity with this all-in-one dashboard, designed to simplify task management and operational tracking.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Performance Monitor</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Stay on top of your business metrics with this powerful dashboard, offering detailed performance tracking and analysis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content" id="panel5bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Command Center</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Take full control of your business operations with a dashboard that offers a 360-degree view of all essential metrics.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6bh-content" id="panel6bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Business Navigator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Navigate through your business data effortlessly with a dashboard that brings all critical information to your fingertips.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7bh-content" id="panel7bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Control Panel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>A powerful dashboard to manage and monitor all aspects of your business, ensuring smooth and efficient operations.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel8bh-content" id="panel8bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Strategic Overview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Elevate your strategic planning with this dashboard, providing a clear and concise overview of your key business metrics.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel9"} onChange={handleChange("panel9")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel9bh-content" id="panel9bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>DashboardX</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The ultimate dashboard experience, designed to give you deep insights and full control over your business activities.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel10"} onChange={handleChange("panel10")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel10bh-content" id="panel10bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Metrics Master</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A robust dashboard focused on delivering detailed metrics and analytics, helping you master your business operations.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
