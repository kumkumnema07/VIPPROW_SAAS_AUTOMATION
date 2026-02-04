// "use client";

// import { createPortal } from "react-dom";
// import { X } from "lucide-react";
// import { useEffect, useState } from "react";

// type ModalProps = {
//   open: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// };

// export function Modal({ open, onClose, children }: ModalProps) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     return () => setMounted(false);
//   }, []);

//   if (!open || !mounted) return null;

//   return createPortal(
//     <div
//       className="fixed inset-0  z-9999  bg-black/60 flex items-center justify-center"
//       onClick={onClose}   // ⬅ background click = close
//     >
//       <div
//         className="relative w-full max-w-md mx-4 rounded-xl bg-white shadow-xl"
//         onClick={(e) => e.stopPropagation()} // ⬅ form click safe
//       >
        

//         {children}
//       </div>
//     </div>,
//     document.body
//   );
// }










"use client";

import type { ReactNode } from "react";



export function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-lg rounded-lg bg-background p-4">
        <button
          onClick={onClose}
          className="absolute right-3 top-2 text-lg"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
