function FloatingInput({children, inputType, inputId, onStateUpdate=undefined}) {

  function fireEvent(event) {
    if(onStateUpdate === undefined) return;
    onStateUpdate(event.target.value);
  }

  return (
    <div className="form-floating mb-3">
      <input type={inputType} onKeyUp={fireEvent} className="form-control" id={inputId} placeholder="name@example.com" />
      <label htmlFor={inputId}>{children}</label>
    </div>
  )
}

export { FloatingInput }