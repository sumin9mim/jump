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
        const response = await fetch(
          `http://localhost:9999/topics/${params.boardid}`
        );
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

    const writer = (e.target as HTMLFormElement).elements.namedItem(
      'writeredit'
    ) as HTMLInputElement;
    const pwd = (e.target as HTMLFormElement).elements.namedItem(
      'pwdedit'
    ) as HTMLInputElement;
    const title = (e.target as HTMLFormElement).elements.namedItem(
      'titleedit'
    ) as HTMLInputElement;
    const content = (e.target as HTMLFormElement).elements.namedItem(
      'contentedit'
    ) as HTMLInputElement;
    const point = (e.target as HTMLFormElement).elements.namedItem(
      'pointedit'
    ) as HTMLInputElement;

    const writerValue = writer?.value;
    const pwdValue = pwd?.value;
    const titleValue = title?.value;
    const contentValue = content?.value;
    const pointValue = point?.value || 0;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        writerValue,
        pwdValue,
        titleValue,
        contentValue,
        pointValue,
      }),
    };

    try {
      const response = await fetch(
        `http://localhost:9999/topics/${params.boardid}`,
        options
      );
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      const result = await response.json();
      console.log(result); // 서버에서 반환한 결과를 콘솔에 출력

      // 예시: 성공적으로 데이터를 서버에 전송한 후, 페이지 이동하기
      router.push(`/boardlist`); // 게시판 목록 페이지로 이동
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>
          제목:
          <input type='text' defaultValue={data.titleValue} name='titleedit' />
        </h1>
        <h2>
          작성자:
          <input
            type='text'
            defaultValue={data.writerValue}
            name='writeredit'
          />
        </h2>
        <h2>
          비밀번호:
          <input
            type='text'
            defaultValue={data.pwdValue}
            readOnly={true}
            name='pwdedit'
          />
        </h2>
        <h3>
          내용:
          <input
            type='text'
            defaultValue={data.contentValue}
            name='contentedit'
          />
        </h3>
        <h3>
          포인트:
          <input type='text' defaultValue={data.pointValue} name='pointedit' />
        </h3>
        <input type='submit' value='수정 등록하기' className='btn-primary' />
      </form>
    </>
  );
}
