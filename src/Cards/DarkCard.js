function DarkCard({
  children,
  grid=undefined,
  sm=undefined,
  md=undefined,
  lg=undefined
}) {
  const classList = ['card', 'text-white', 'bg-dark', 'mb-3', 'shadow'];

  if(grid !== undefined) classList.push(`col-${grid}`)
  if(sm !== undefined) classList.push(`col-sm-${sm}`);
  if(md !== undefined) classList.push(`col-md-${md}`);
  if(lg !== undefined) classList.push(`col-lg-${lg}`);

  return (
    <article className={classList.join(' ')}>
      <div className="card-body">
        {children}
      </div>
    </article>
  );
}

export { DarkCard }