import { motion } from "framer-motion"

import image_1a from "../assets/tech_logos/html5-color.svg";
import image_1 from "../assets/tech_logos/javascript.svg";
import image_2 from "../assets/tech_logos/react.svg";
import image_3 from "../assets/tech_logos/tailwindcss.svg";
import image_3a from "../assets/tech_logos/bootstrap-color.svg";
import image_4 from "../assets/tech_logos/nodedotjs.svg";
import image_5 from "../assets/tech_logos/express.svg";
import image_6 from "../assets/tech_logos/postgresql.svg";
import image_7 from "../assets/tech_logos/mongodb.svg";
import image_8 from "../assets/tech_logos/git.svg";
import image_9 from "../assets/tech_logos/github.svg";
import image_10 from "../assets/tech_logos/angular.svg";
import image_11 from "../assets/tech_logos/python.svg";
import image_12 from "../assets/tech_logos/stripe.svg";

export default function InfiniteScroll() {
  const LogoArr = [
    image_1a,
    image_1,
    image_2,
    image_3,
    image_3a,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_10,
    image_11,
    image_12,
  ];
  return (
    <div className="relative container mx-auto mt-25 mb-25">
      <div className="flex">
        <motion.div 
          className="flex shrink-0"
          initial={{ x:0 }}
          animate={{ x:'-100%' }}
          transition={{ duration:12, repeat: Infinity, ease: "linear" }}
        >
          {LogoArr.map((image, index) => {
            return <img src={image} key={index} className="h-12 pr-20" />;
          })}
        </motion.div>
        <motion.div 
          className="flex shrink-0"
          initial={{ x:0 }}
          animate={{ x:'-100%' }}
          transition={{ duration:12, repeat: Infinity, ease: "linear" }}
        >
          {LogoArr.map((image, index) => {
            return <img src={image} key={index} className="h-12 pr-20" />;
          })}
        </motion.div>
      </div>
    </div>
  );
}
