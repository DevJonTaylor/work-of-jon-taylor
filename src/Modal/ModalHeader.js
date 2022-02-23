function ModalHeader({ children }) {
  return (
    <div className="modal-header">
      {children}
    </div>
  )
}

function ModalHeaderText({ children, id = undefined, className = undefined }) {
  const classList = ['modal-title'];
  if(id === undefined) id = '';
  if(className !== undefined) classList.push(...className.split(' '));

  return (
    <h5 className={classList.join(' ')} id={id}>{children}</h5>
  )
}

function ModalHeaderExit() {
  return (
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
  )
}

export { ModalHeader, ModalHeaderText, ModalHeaderExit }