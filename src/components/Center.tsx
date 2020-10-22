import React from 'react'

type Props = {
  children?: React.ReactNode,
}

export default function Center(props: Props) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}>
      {props.children}
    </div>
  )
}