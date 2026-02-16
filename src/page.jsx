import React, { useState } from "react";
import BasicInfo from "./components/basic-info-form";
import ContactInfo from "./components/contact-info-form";

export default function Mainform() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    accept: false,
    completed : false
  });

  console.log("formData", formData);
  return (
    <div className="">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <button onClick={() => setStep(1)}>Basic info</button>
        <button
          disabled={!formData.fullName || !formData.email}
          onClick={() => setStep(2)}
        >
          contact info
        </button>
      </div>

      <div>
        {step == 1 && (
          <BasicInfo
            formData={formData}
            setFormData={setFormData}
            setStep={setStep}
          />
        )}
        {step == 2 && (
          <ContactInfo
            formData={formData}
            setFormData={setFormData}
            setStep={setStep}
          />
        )}
      </div>

      <div>
        {formData.completed && (
            <>
              <div>{formData.fullName}</div>
              <div>{formData.role}</div>
              <div>{formData.email}</div>
              <div>{formData.accept ? <>True</> : <>false</>}</div>
            </>
          )}
      </div>
    </div>
  );
}
