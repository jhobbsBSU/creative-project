import styles from "./TextFloat.module.css";
import { useTransition, animated, config } from "@react-spring/web";

export function Text({ children, show }) {
  const transitions = useTransition(show, {
    
   
  });
  return transitions(({ opacity, scale, x, y }, item) => {
    return item ? (
      <animated.div class={styles.container} style={{ opacity, scale, x }}>
        {children}
      </animated.div>
    ) : (
      <></>
    );
  });
}