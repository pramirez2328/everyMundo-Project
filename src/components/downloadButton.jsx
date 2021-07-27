import React from "react";

function DownloadButton({ download }) {
  return (
    <button type="button" className="btn btn-info" onClick={download}>
      DOWNLOAD <br /> csv file
    </button>
  );
}

export default DownloadButton;
