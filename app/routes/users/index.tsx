import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = async () => {
  if (typeof document !== 'undefined') {
    const response = await fetch(`${process.env.API_URL}/users`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer Token ${localStorage.getItem('remix-token')}`,
      },
    });

    return json(response);
  }

  return null;
};

const Users = () => {
  const data = useLoaderData();

  console.log('data', data);

  return <div>hej</div>;
};

export default Users;
