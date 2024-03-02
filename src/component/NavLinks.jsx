import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
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
              className="font-bold  py-2 text-base text-blue-600 transition-colors hover:text-gray-900 sm:hover:bg-transparent"
              onMouseEnter={() => setHoveredIndex(_id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {title}
            </div>
          ) : (
            <Link
              href={href}
              className="font-bold  py-2 text-base text-blue-600 transition-colors hover:text-gray-900 sm:hover:bg-transparent"
            >
              {title}
            </Link>
          )}

          <AnimatePresence>
            {hoveredIndex === _id && subItems && (
              <motion.div
                className="fixed bg-white rounded-lg "
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
                    className="lg:relative  flex-col left-0 m-2 text-sm text-blue-600 transition-colors hover:bg-black cursor-pointer"
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
