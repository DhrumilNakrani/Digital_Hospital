import { React} from "react";
import StaffMainNavigation from "./StaffMainNavigation";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
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