import React, { useState } from "react";

export default function ToolsUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [importResult, setImportResult] = useState("Waiting for submission");

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("tools", selectedFile);

    fetch(
      "/tools/upload",

      {
        method: "POST",

        body: formData,
      }
    )
      .then((response) => response.json())

      .then((result) => {
        setImportResult("Import Successful");
      })

      .catch((error) => {
        setImportResult("Import Error\n" + error.toString());
      });
  };

  return (
    <div>
      <div className="tool-upload-header">Upload Tools Here</div>
      <div className="tool-upload-container">
        <input type="file" name="tools" onChange={changeHandler} />
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
      </div>
      <div className="tool-upload-import-result">{importResult}</div>
    </div>
  );
}
