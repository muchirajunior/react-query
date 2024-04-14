import { useQuery } from "@tanstack/react-query"

export const TanstackExample: React.FC = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>fetch('https://api.github.com/repos/TanStack/query').then((res) => res.json(),),
  })

  if (isPending) return <div className="container p-5"> <div className="spinner-border mx-auto" role="status" /> </div>

  if (error) return <div className="container p-4 mt-5 shadow rounded-4"> 'An error has occurred: ' + error.message </div>

  return (
    <div className="container p-4 mt-5 shadow rounded-4">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )

}
