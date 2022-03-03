import { React, useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import StaffMainNavigation from "./StaffMainNavigation";
import "./UploadDocument.module.css";
import { Worker } from "@react-pdf-viewer/core";
// Import the main Viewer component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Button } from "react-bootstrap";
import StaffManagePatientId from "./StaffManagePatientId";
const UploadDocument = () => {
  return (
    <div>
      <StaffMainNavigation></StaffMainNavigation>
      <StaffManagePatientId></StaffManagePatientId>
    </div>
  );
};

export default UploadDocument;