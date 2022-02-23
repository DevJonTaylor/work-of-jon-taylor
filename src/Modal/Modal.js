import {ModalDialog} from "./ModalDialog";
import {ModalContent} from "./ModalContent";

function Modal({
  children,
  id = undefined,
  labelTitleId = undefined,
  className = undefined,
  size = false,
  center = false
}) {
  const classList = ['modal', 'fade'];

  if(id === undefined) id = '';
  if(labelTitleId === undefined) labelTitleId = '';
  if(className !== undefined) classList.push(...className.split(' '));

  return (
    <div className={classList.join(' ')} id={id} aria-hidden="true" aria-labelledby={labelTitleId} tabIndex="-1">
      <ModalDialog size={size} center={center}>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalDialog>
    </div>
  )
}

export { Modal }