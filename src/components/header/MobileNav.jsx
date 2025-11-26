import { motion } from "framer-motion";
import { navbar } from "../../contants/navbar";

function MobileNav({ navOpen, onToggleNav }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: navOpen ? 1 : 0, height: navOpen ? "auto" : 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-300 flex gap-5 flex-col items-center py-5 absolute top-15 w-full left-0"
    >
      <nav>
        <ul className="space-y-5">
          {navbar.map((item, i) => (
            <li key={i}>
              <a href="#" onClick={onToggleNav}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <motion.button className="capitalize cursor-pointer ">
          Contact me
        </motion.button>
      </nav>
    </motion.div>
  );
}

export default MobileNav;
