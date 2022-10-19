import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h1>여기가 홈입니다.</h1>
            <h2>가장 먼저 보이는 페이지입니다.</h2>
            <Link to="/about"><h2>소개</h2></Link>
            <Link to="/setting"><h2>설정</h2></Link>
            <Link to="/newslist"><h2>뉴스</h2></Link>
        </div>
    )
}
export default Home;