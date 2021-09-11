import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSafeDispatch } from '../hooks/useSafeDispatch';
import { fetchUser } from '../useCases/fetchUser';
import { sleep } from '../utils/sleep';

export function User() {
  const [user, setUser] = useState<undefined | string>(undefined);

  const { safeDispatch } = useSafeDispatch(setUser);

  // useEffect(() => {
  //   (async function loadUser() {
  //     await sleep(2000);
  //     const response = await fetchUser();

  //     setUser(response.data.name);
  //   })();
  // }, []);

  useEffect(() => {
    (async function loadUser() {
      await sleep(2000);
      const response = await fetchUser();

      safeDispatch(response.data.name);
    })();
  }, [safeDispatch]);

  return (
    <>
      <h1>User</h1>
      <Link to="/">Home</Link>
      {user && <p>{user}</p>}
    </>
  );
}
