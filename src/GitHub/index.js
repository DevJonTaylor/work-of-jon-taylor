function Repo({ children, user='DevJonTaylor', repoName='', newTab = true }) {
  let url = `https://github.com/${user}/${repoName}/`
  return newTab ? (
    <a href={url} rel="noreferrer" target="_blank">{children}</a>
  ) : (
    <a href={url}>{children}</a>
  )
}

function Pages({ children, user='DevJonTaylor', repoName='', newTab = true }) {
  let url = `https://${user}.github.io/${repoName}/`
  return newTab ? (
    <a href={url} target="_blank" rel="noreferrer">{children}</a>
  ) : (
    <a href={url}>{children}</a>
  )
}

function RepoAndPages({ user = 'DevJonTaylor', repoName = '', newTab = true }) {
  return (
    <span className="space-between">
      <span>
        <span className="fw-bold">GitHub</span>: <Repo user={user} newTab={newTab} repoName={repoName}>here</Repo>
      </span>
      <span>
        <span className="fw-bold">Deployed</span>: <Pages repoName={repoName} user={user} newTab={newTab}>here</Pages>
      </span>
    </span>
  )
}

export { Repo, Pages, RepoAndPages }