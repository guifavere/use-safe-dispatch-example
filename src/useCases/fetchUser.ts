import axios from 'axios';

interface Response {
  name: string;
}

export function fetchUser() {
  return axios.get<Response>('https://api.github.com/users/guifavere');
}