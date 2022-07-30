import React from "react"
import { RoundedButton } from "../components/RoundedButton"

export const ClearButton = ({onClearSubject}) => {
  return (
    <RoundedButton title={"clear"} size={65} onPress={() => onClearSubject(null)} />
  )
}
export default ClearButton