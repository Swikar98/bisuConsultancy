import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from "framer-motion";
import { navData } from "../constants/index";

const DropdownMenu = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();

  const handleNavigation = (href) => {
    router.push(href);
  };

  return (
    <>
      {items.map(({ _id, title, href, subItems }) => (
        <div key={_id} className="relative inline-block">
          {subItems ? (
            <div
              className="font-bold py-2 text-base text-black hover:bg-blue-600 transition-colors hover:text-gray-900 sm:hover:bg-transparent"
              onMouseEnter={() => setHoveredIndex(_id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {title}
            </div>
          ) : (
            <Link href={href}>
              <span
                className="font-bold py-2 text-base text-black hover:bg-blue-600 hover:text-white p-2 rounded-lg transition-colors relative"
                onMouseEnter={() => setHoveredIndex(_id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {title}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-teal-600 transform transition-transform duration-300 ${
                    hoveredIndex === _id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </span>
            </Link>
          )}

          <AnimatePresence>
            {hoveredIndex === _id && subItems && (
              <motion.div
                className="fixed bg-white rounded-lg"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, y: 5, transition: { duration: 0.2 } }}
                onMouseEnter={() => setHoveredIndex(_id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {subItems.map((subItem) => (
                  <div
                    key={subItem._id}
                    onClick={() => handleNavigation(subItem.href)}
                    className="lg:relative flex-col left-0 m-2 text-sm text-teal-700 transition-colors hover:bg-underline cursor-pointer"
                  >
                    {subItem.title}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
};

const NavLinks = () => {
  return <DropdownMenu items={navData} />;
};

export default NavLinks;
