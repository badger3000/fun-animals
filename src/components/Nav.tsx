import {FC, PropsWithChildren} from "react";

interface Nav extends PropsWithChildren {
  navItems?: Array<string>;
}
const Navigation: FC<Nav> = ({
  navItems = ["Size", "Color", "Breed", "Age", "Location"],
}) => {
  return (
    <nav className="mb-2">
      <ul className="flex flex-row justify-center">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`relative ${
              index === 2
                ? 'after:content-[""] after:block after:bg-red after:rounded-full after:w-3 after:h-3 after:mx-auto'
                : ""
            }`}
          >
            <button
              className={`block mx-2 uppercase text-gray hover:text-black transition-all duration-300 ${
                index === 2 ? "text-black" : ""
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
