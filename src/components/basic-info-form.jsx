import React from "react";

export default function BasicInfo({ formData, setFormData, setStep }) {
  return (
    <div>
      <div>
        <div className="" style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "4px" }}> Full name</label>
          <input
            style={{ padding: "12px" }}
            required
            type="text"
            name="fullname"
            placeholder="full name"
            value={formData.fullName}
            onChange={(e) => {
              setFormData((pre) => {
                return { ...pre, fullName: e.target.value };
              });
            }}
          />
        </div>

        <div
          className=""
          style={{
            display: "flex",
            marginBottom: "6px",
            flexDirection: "column",
          }}
        >
          <label style={{ marginBottom: "4px" }}> Email</label>

          <input
            style={{ padding: "12px" }}
            required
            type="text"
            name="email"
            placeholder="enter email"
            value={formData.email}
            onChange={(e) => {
              setFormData((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
        </div>
        <button
          onClick={() => {
            if (formData.fullName || formData.email) {
              setStep(2);
            }
          }}
          disabled={!formData.fullName || !formData.email}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
