import './spinner.css'
function Spinner () {
  return (
    <div className="spinner-content">
        <div className="spinner"></div>
    </div>
  )
}

function OnlySpinner () {
  return <div className="spinner"></div>
}
export { Spinner, OnlySpinner }
