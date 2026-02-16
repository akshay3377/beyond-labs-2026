import React from "react";

export default function ContactInfo({ formData, setFormData, setStep }) {
  return (
    <div>
      <div className="" style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "4px" }}> Select Role</label>
        <select
          style={{ marginBottom: "8px", padding: "8px" }}
          name="role"
          value={formData.role}
          onChange={(e) => {
            setFormData((pre) => {
              return { ...pre, role: e.target.value };
            });
          }}
        >
          <option value={"user"}>User</option>
          <option value={"admin"}>Admin</option>
          <option value={"super-admin"}>Super admin</option>
        </select>

        <div
          style={{
            marginBottom: "12px",
            display: "flex",
            justifyContent: "",
            gap: "4px",
          }}
        >
          <input
            required
            type="checkbox"
            name="accept"
                        id="accept"
            checked ={formData.accept}
            value={formData.accept}
            onChange={(e) => {
              setFormData((pre) => {
                return { ...pre, accept: e.target.checked };
              });
            }}
          />

          <label htmlFor="accept">Please accept terms and conditions</label>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "4px",
          }}
        >
          <button
            onClick={() => {
              setStep(1);
            }}
            type="button"
          >
            Back
          </button>

          <button
            onClick={() => {
               setFormData((pre) => {
                return { ...pre, completed: true };
              });
            }}
            disabled={!formData.role || !formData.accept}
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
