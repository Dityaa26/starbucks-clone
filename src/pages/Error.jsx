import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div className="flex flex-col justify-center w-full h-screen items-center">
      <h1 className="text-6xl font-semibold mb-4">
        {error.statusText} | {error.status}
      </h1>
      <p className="text-2xl opacity-80">{error.error.message}</p>
    </div>
  );
}

export default Error