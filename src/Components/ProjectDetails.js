import React from 'react'

export default function ProjectDetails({project_name,title, description}) {
  return (
    <div   className="card-right">
    <h4>{project_name} </h4>
      <h1> {title}</h1>

     <p className="card-paragraph">
      {description}
    </p>

  </div>
  )
}
