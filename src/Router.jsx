import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/common/PageLayout';
import CreatePetition from './pages/CreatePetition';
import Main from './pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          {/*main 페이지 = 최근 청원 페이지여요*/}
          <Route path="/" element={<Main></Main>} />
          <Route path="/petitionDetail">
            {/*청원 상세 페이지인데, 각각의 상세 페이지를 구별해주는 것을
            petitionId라고 정의했어요!
            아마 서버쌤들께서 배열로 최근 청원 목록 넘겨주실 건데
            배열 인덱스로 navigate 해주시면 될 것 같습니다!*/}
            <Route
              path="/petitionDetail/:petitionId"
              element={<div>petitionDetail(pages 폴더에 페이지 만들어서 import)</div>}
            />
          </Route>
          <Route path="/myPetition" element={<div>my(pages 폴더에 페이지 만들어서 import)</div>} />
          <Route path="/createPetition" element={<CreatePetition />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
};

export default Router;
