import React, { useState } from "react";
import FormError from "../input/form-error";
import { CloudUploadOutlined, DeleteOutlined } from "@ant-design/icons";
const FileUpload = ({
  label,
  state,
  type = "single" || "multiple",
  onChange,
  error,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-start">
      <label
        htmlFor="first-name"
        className="block mb-2 text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="w-full h-full overflow-hidden p-4 flex items-center border-2 border-dashed rounded-lg border-black">
        {((!state && type !== "multiple") || type == "multiple") && (
          <div className="flex flex-col items-center mx-auto relative p-4">
            <CloudUploadOutlined className="text-4xl" />
            <input
              type="file"
              accept="image/*"
              className="block w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer"
              onChange={(e) => onChange(e.target.files[0], "add")}
              // className="mt-2 p-3 border rounded-lg w-full bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 bg-red-500 hover:bg-white"
            />
            <div className="text-sm font-medium">Upload File</div>
            {error && <FormError error={error} />}
          </div>
        )}
        {state && (
          <div className="flex w-full h-full rounded-lg overflow-hidden group relative justify-center">
            <img
              src={state}
              alt="Selected"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <div
                className="cursor-pointer"
                onClick={() => onChange(null, "remove")}
              >
                <DeleteOutlined className="text-2xl text-white" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
