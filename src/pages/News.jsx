import { motion } from "framer-motion";

function News() {
  return (
    <>
      <div className="w-full h-[50px] overflow-hidden bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 flex items-center">
        <motion.div
          className="inline-block whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 12, ease: "linear" }}
        >
          <p className="text-white font-mono font-bold text-2xl px-5">
            February 2026 NEOTERIC NEWS: With official support from the BIO5 Institute, UA iGEM is ready to begin innovative lab work.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default News;