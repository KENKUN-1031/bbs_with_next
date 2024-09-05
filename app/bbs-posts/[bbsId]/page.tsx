import { BBSDataType } from '@/app/types/types';
import React from 'react'


async function getDetailBBSData(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });
  const bbsDetailData: BBSDataType = await response.json();

  return bbsDetailData;
}

const BBSDetailPage = async ({params }: {params: { bbsId: number }}) => { //bbsIdはroutesの方のファイル名(bbsId)と合わせる
  const bbsDetailData = await getDetailBBSData(params.bbsId)
  console.log(bbsDetailData)
  return (
    <div>BBSDetailPage</div>
  )
}

export default BBSDetailPage
