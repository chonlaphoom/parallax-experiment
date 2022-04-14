import { animated, config, useSpring } from "react-spring";
import { useState } from "react";

const Number = () => {
    const [flip, set] = useState(false)
    const { number } = useSpring({
      reset: true,
      reverse: flip,
      from: { number: 0 },
      number: 1,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!flip),
    })
  
    return <animated.div>{number.to(n => n.toFixed(2))}</animated.div>
}

export default Number;