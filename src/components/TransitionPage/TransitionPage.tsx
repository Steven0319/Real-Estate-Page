'use client'

import { AnimatePresence, motion } from "framer-motion"

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-secondary z-30"
        variants={transitionsVariantsPage}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-secondary/70 opacity-59 z-20"
        variants={transitionsVariantsPage}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
    </AnimatePresence>
  )
}

const transitionsVariantsPage = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: "0%",
    width: "0%",
  },
}

export default TransitionPage