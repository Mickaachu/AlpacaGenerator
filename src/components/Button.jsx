import React from 'react'

function Button({Title, Name, OnChanged, style, children}) {

  return (
    <div className={`relative min-w-32 text-center min-h-10 ${style}`} id='button'>
      <input type="radio" name={Name} id={Name} value={Title} 
        onChange={(e) => OnChanged(e.target.value)} 
        className='opacity-1 absolute top-0 bottom-0 left-0 right-0 block '  />
      <label htmlFor={Title} className='flex justify-center items-center gap-1 absolute top-0 bottom-0 left-0 right-0 py-2 px-5 border border-blue-500 cursor-pointer rounded-md' >
        {Title}
        {children}
      </label>
    </div>
      
  )
}

export default Button