import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function Dropzone({
  onUpload,
  acceptedFileTypes = ["pdf", "docx", "doc", "png", "jpg", "jpeg"],
  loading = false,
  maxFileSize = 1,
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
      toast.error(`File size should be less than ${maxFileSize}MB`);
      setError(`File size should be less than ${maxFileSize}MB`);
      return;
    } else if (!acceptedFileTypes.includes(fileType)) {
      toast.error("Invalid file type");
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
      toast.error(`File size should be less than ${maxFileSize}MB`);
      setError(`File size should be less than ${maxFileSize}MB`);
      return;
    } else if (!acceptedFileTypes.includes(fileType)) {
      toast.error("Invalid file type");
      setError("Invalid file type");
      return;
    } else {
      setFile(file);
      onUpload(file);
    }
  };

  return (
    <div
      className={`relative h-20 w-20 rounded-lg flex items-center justify-center border-2 border-dashed ${
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
            absolute left-0 top-0 z-10 h-20 w-20 opacity-0 ${
              loading ? "cursor-default" : "cursor-pointer"
            }
          `}
          disabled={loading}
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            class="w-10"
            src="/assets/icons/upload-cicle.svg"
            alt="file upload icon"
            width="40"
            height="40"
          />
        </div>
      </div>
    </div>
  );
}
