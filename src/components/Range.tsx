import React, { FC } from "react"
import * as styles from "./Range.module.css"
import { RangeProps } from "../types/globalTypes"

const Range: FC<RangeProps> = ({ friendliness, shedding }) => {
  let className: string

  switch (friendliness || shedding) {
    case 1:
      className = styles.none
      break
    case 2:
      className = styles.forth
      break
    case 3:
      className = styles.half
      break
    case 4:
      className = styles.third
      break
    case 5:
      className = styles.full
      break
    default:
      className = "" // default class or styles
  }
  return (
    <section className="flex flex-row justify-between mb-12">
      <div className="flex-1 mr-4">
        <h3>Shedding</h3>
        <span className={`${styles.rangeSlider} ${className}`}></span>
      </div>
      <div className="flex-1">
        <h3>Friendliness</h3>
        <span className={`${styles.rangeSlider} ${className}`}></span>
      </div>
    </section>
  )
}

export default Range
