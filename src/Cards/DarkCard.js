import { useEffect, useState } from "react";
import { Tooltip, Modal } from "bootstrap";

function DarkCard({
  children,
  openModal = undefined,
  grid = undefined,
  sm = undefined,
  md = undefined,
  lg = undefined,
  className = undefined
}) {
  const classList = ['card', 'text-white', 'bg-dark', 'mb-3', 'shadow']
  const [ toolTip, setToolTip ] = useState(false);
  if(className !== undefined) classList.push(...className.split(' '));
  if(grid !== undefined) classList.push(`col-${grid}`)
  if(sm !== undefined) classList.push(`col-sm-${sm}`);
  if(md !== undefined) classList.push(`col-md-${md}`);
  if(lg !== undefined) classList.push(`col-lg-${lg}`);

  function openModalEventHandler(event) {
    const modalElement = document.querySelector(`#${openModal.toLowerCase()}`);
    const modal = new Modal(modalElement);

    modal.show();
  }

  useEffect(() => {
    if(openModal === undefined) return;

    setToolTip(true);
    const toolTipElement = document.querySelector(`[open-modal="${openModal.toLowerCase()}"]`);
    new Tooltip(toolTipElement);
  }, [openModal, toolTip])

  return openModal === undefined ?
    (
      <article className={classList.join(' ')}>
        {children}
      </article>
    ) :
    (
      <article
        className={classList.join(' ')}
        open-modal={openModal.toLowerCase()}
        onClick={openModalEventHandler}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={`Click to read more about ${openModal}`}>
        {children}
      </article>
    );
}

export { DarkCard }