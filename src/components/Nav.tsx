import React, { FC } from "react"
import * as styles from "./Nav.module.css"
import { Nav } from "../types/globalTypes"

const Navigation: FC<Nav> = () => {
  const navItems = ["Size", "Color", "Breed", "Age", "Location"]
  return (
    <nav className="mb-2">
      <ul className={styles.nav}>
        {navItems.map((item, index) => (
          <li key={index}>
            <button className={styles.navLinks}>{item}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navigation
