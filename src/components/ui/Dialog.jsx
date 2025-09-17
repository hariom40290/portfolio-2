// src/components/ui/Dialog.jsx
"use client";

import React from "react";

const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onOpenChange} // close on background click
    >
      <div
        className="bg-white max-w-3xl w-full rounded-lg overflow-hidden shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {children}
      </div>
    </div>
  );
};

// Optional subcomponents for structure
export const DialogHeader = ({ children, className = "" }) => (
  <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
    {children}
  </div>
);

export const DialogTitle = ({ children, className = "" }) => (
  <h2 className={`text-2xl font-bold text-gray-900 ${className}`}>{children}</h2>
);

export const DialogContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export default Dialog;
