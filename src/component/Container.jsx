import clsx from 'clsx'
import React from 'react'

const Container = ({className, ...props }) => {
  return <div className={clsx ("max-w-full-xl mx-auto px-4 sm:px-6 lg:px-8",className)}
  {...props}/>
}

export default Container