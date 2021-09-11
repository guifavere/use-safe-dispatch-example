import axios from 'axios';

type Response = { name: string }[];

export function fetchRepos() {
  return axios.get<Response>('https://api.github.com/users/guifavere/repos');
}