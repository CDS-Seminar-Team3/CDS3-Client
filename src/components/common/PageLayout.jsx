import PropTypes from 'prop-types';

const PageLayout = props => {
  const { children } = props;
  return (
    <div>
      {/*헤더자리*/}
      {children}
      {/*푸터자리*/}
    </div>
  );
};
/*
이거 propTypes 명시 안 해주니까 에러 나더라구요..
그래서 prop-types 패키지
install 하고 타입 명시해 주었습니다~
*/
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
