import { useRef, useState } from "react";

export default function Dropzone({
  onUpload,
  acceptedFileTypes = ["pdf", "docx", "doc", "png", "jpg", "jpeg"],
  title = "Drop files here to upload",
  subTitle = "To upload file size is (Max 5Mb) and allowed file types are (.doc, .docx, .pdf)",
  loading = false,
  maxFileSize = 5,
  className = "",
}) {
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const [error, setError] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setError(null);
    setDragOver(false);

    const file = event.dataTransfer.files[0];

    const fileSize = file?.size / 1024 / 1024;
    const fileType = file?.type?.split("/")[1];
    if (fileSize > maxFileSize) {
      setError(`File size should be less than ${maxFileSize}MB`);
      return;
    } else if (!acceptedFileTypes.includes(fileType)) {
      setError("Invalid file type");
      return;
    } else {
      setFile(file);
      onUpload(file);
    }
  };

  const handleInputChange = (event) => {
    setError(null);
    const file = event.target.files[0];
    const fileSize = file?.size / 1024 / 1024;
    const fileType = file?.type?.split("/")[1];
    if (fileSize > maxFileSize) {
      setError(`File size should be less than ${maxFileSize}MB`);
      return;
    } else if (!acceptedFileTypes.includes(fileType)) {
      setError("Invalid file type");
      return;
    } else {
      setFile(file);
      onUpload(file);
    }
  };

  return (
    <div
      className={`relative rounded-lg border-2 border-dashed py-6 px-6 ${
        dragOver
          ? "border-primary"
          : error
          ? "border-red-500"
          : "border-[#EAECF0]"
      } ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleInputChange}
          className={`
            absolute left-0 top-0 z-10 h-full w-full opacity-0 ${
              loading ? "cursor-default" : "cursor-pointer"
            }
          `}
          disabled={loading}
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <i className="fal fa-file-upload text-3xl text-gray-400"></i>
          <p className="text-lg font-medium">{file ? file.name : title}</p>
          <p className="text-sm text-gray-500">{subTitle}</p>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}
