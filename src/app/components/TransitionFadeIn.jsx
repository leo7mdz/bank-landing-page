import { useEffect, useRef } from "react";
import { useInView, useAnimation, motion } from "framer-motion";
import transitionFadeIn from "@/utils/transitions";

const TransitionFadeIn = (props) => {
  const { children } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={transitionFadeIn()}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TransitionFadeIn;
