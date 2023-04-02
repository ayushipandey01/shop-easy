import * as ReactDOM from "react-dom";

export const Backdrop =  props => {

  const handleClick = ()=>{
    if(props.onClose){
      props.onClose();
    }
  }
  return(
    <div onClick = {handleClick} className="loader-overlay"></div>
  )
}

export const Loader = () => {
  return (

    ReactDOM.createPortal(
        <>
            <Backdrop />
            <div className="loading-dots">
                <div>Loading</div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>
        </>,
        document.getElementById("loader-root")
    )    
  )
}