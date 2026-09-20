import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { asset } from "../lib/assets";
import { CloseIcon } from "./icons";

export default function VideoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (open) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Bora demo video"
        >
          <motion.div
            className="modal-card"
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.94, y: 16, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close video">
              <CloseIcon size={18} />
            </button>
            <video
              src={asset("assets/video/bora.mp4")}
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
            />
            <p className="modal-hint">
              Bora — demo of the events and points-of-interest app for micro-mobility.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}