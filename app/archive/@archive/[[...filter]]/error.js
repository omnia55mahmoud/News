"use client"
export default function Error ({error}){
  return(
    <div id="error">
    <h2>an error occurred!</h2>
    <p>{error.message}</p>
   </div>
  )
}