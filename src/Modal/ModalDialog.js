function ModalDialog({ children, center = false, size = false }) {
  const classList = ['modal-dialog'];

  if(center !== false) classList.push('modal-dialog-centered');
  if(size !== false) {
    switch(size) {
      case 'xl':
        classList.push('modal-xl');
        break;
      case 'lg':
        classList.push('modal-lg');
        break;
      case 'sm':
        classList.push('modal-sm');
        break;
      default:
        break;
    }
  }
  return (
    <div className={classList.join(' ')}>
      {children}
    </div>
  )
}

export { ModalDialog }