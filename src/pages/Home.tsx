import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSafeDispatch } from '../hooks/useSafeDispatch';
import { fetchRepos } from '../useCases/fetchRepos';
import { sleep } from '../utils/sleep';

export function Home() {
  const [repos, setRepos] = useState<string[]>([]);

  const { safeDispatch } = useSafeDispatch(setRepos);

  // useEffect(() => {
  //   (async function loadRepos() {
  //     await sleep(2000);
  //     const response = await fetchRepos();
  //     const newRepos = response.data.map(repo => repo.name);

  //     setRepos(newRepos);
  //   })();
  // }, []);

  useEffect(() => {
    (async function loadRepos() {
      await sleep(2000);
      const response = await fetchRepos();
      const newRepos = response.data.map(repo => repo.name);

      safeDispatch(newRepos);
    })();
  }, [safeDispatch]);

  return (
    <>
      <h1>Home</h1>
      <Link to="/user">User</Link>
      {repos.length > 0 && (
        <ul>
          {repos.map(repo => <li key={repo}>{repo}</li>)}
        </ul>
      )}
    </>
  );
}
