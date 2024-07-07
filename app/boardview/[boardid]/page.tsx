'use client';

import { notFound, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Params = { params: { boardid: string } };

export default function Boardid({ params }: Params) {
  const [data, setData] = useState<any>(null); // 서버로부터 받은 데이터를 저장할 상태
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9999/topics`);
        if (!response.ok) {
          throw new Error('데이터를 불러오는 데 실패했습니다');
        }
        const result = await response.json();
        setData(result); // 서버에서 받은 데이터를 상태에 설정
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData(); // 컴포넌트가 마운트될 때 데이터를 가져오도록 설정
  }, [params.boardid]);
  if (!data) {
    return <div>로딩 중...</div>; // 데이터를 불러오는 동안 로딩 상태를 표시
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  interface Data {
    writerValue?: string | number;
    pwdValue?: string | number;
    titleValue?: string | number;
    contentValue?: string | number;
    pointValue?: number;
    id: number;
  }
  const finalData = data.find(
    (object: Data) => object.id == parseInt(params.boardid)
  );

  function update() {
    router.push(`/boardedit/${params.boardid}`);
  }
  function Boarddelete() {
    fetch(`http://localhost:9999/topics/${params.boardid}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    router.push('/boardlist');
  }

  return (
    <>
      <h1>게시글</h1>
      <h1>제목: {finalData.titleValue}</h1>
      <h2>작성자:{finalData.writerValue}</h2>
      <h3>내용: {finalData.contentValue}</h3>
      <button onClick={update} className='btn-primary'>
        수정하기
      </button>
      <button onClick={Boarddelete} className='btn-danger'>
        삭제하기
      </button>
    </>
  );
}
