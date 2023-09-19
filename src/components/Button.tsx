import React, { FC } from "react"
import { ButtonPrime } from "../types/globalTypes"

const Button: FC<ButtonPrime> = ({ text }) => {
  return (
    <button className="p-6 text-center bg-yellow rounded-2xl w-full font-semibold text-2xl">
      {text}
    </button>
  )
}

export default Button
