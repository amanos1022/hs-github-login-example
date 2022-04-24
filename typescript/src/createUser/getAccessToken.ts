import axios from 'axios';

export default async (code: string): Promise<string> => {
  const { data } = await axios.post(
    'https://github.com/login/oauth/access_token',
    {
      client_id: 'Iv1.8fb41a270ee0fd0d',
      client_secret: '52df2e4abf3754eae30430e9995897589b88ea1a',
      redirect_uri: 'https://7314-150-220-74-84.ngrok.io',
      code,
    },
    { headers: { 'Accept': 'application/json' } }
  );

  if (data.error) return Promise.reject(data.error);

  return Promise.resolve(data.access_token);
}
