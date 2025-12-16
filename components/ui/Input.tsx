"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm text-gray-600">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`
          w-full px-4 py-3
          rounded-xl
          bg-white
          border border-gray-200
          outline-none
          text-gray-800
          placeholder-gray-400
          focus:border-[#FF6A3D]
          ${className}
        `}
      />
    </div>
  );
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export function TextArea({
  label,
  className = "",
  ...props
}: TextAreaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm text-gray-600">
          {label}
        </label>
      )}
      <textarea
        {...props}
        className={`
          w-full px-4 py-3
          rounded-xl
          bg-white
          border border-gray-200
          outline-none
          text-gray-800
          placeholder-gray-400
          focus:border-[#FF6A3D]
          resize-none
          ${className}
        `}
      />
    </div>
  );
}
