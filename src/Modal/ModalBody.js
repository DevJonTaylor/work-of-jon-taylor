function ModalBody({ children, className = undefined }) {
  const classList = ['modal-body'];

  if(className !== undefined) classList.push(...className.split(' '));

  return (
    <div className={classList.join(' ')}>
      {children}
    </div>
  )
}

export { ModalBody }