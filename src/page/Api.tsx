import { useEffect, useState } from 'react';
import axios from 'axios';

interface IDatas {
  name: string;
  id: string;
}

function Api() {
  const [datas, setDatas] = useState<IDatas[]>([{ name: 'Kim', id: '1' }]);
  useEffect(() => {
    const getDatas = async (): Promise<IDatas[]> => {
      const data = await axios.get<IDatas[]>(
        'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock'
      );
      return data.data;
    };
    getDatas().then((res) => setDatas(res));
  }, []);

  return (
    <div>
      {datas?.map((data) => {
        return (
          <div>
            <div>{data.id}</div>
            <div>{data.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Api;
