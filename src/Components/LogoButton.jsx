import React from 'react'

function LogoButton({text}) {
  return (
    <div>
        <div className="border-2 border-slate-100 rounded-full p-1 flex items-center">
          <img src="src\assets\nice-page-logo-only.png" className="h-5 pl-1 " />
          <p style={{ color: "#8267ec" }} className="pr-2 ml-1 font-noto">
            {text || "Best finance management"}
          </p>
        </div>
    </div>
  )
}

export default LogoButton