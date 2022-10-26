import {Link} from "react-router-dom";
import NewList from "../components/NewsList";
import Categories from "../components/Categories";
import { useCallback, useState } from "react";

const Home = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);
    return (
        <div>
            {/* <h1>여기가 홈입니다.</h1>
            <h2>가장 먼저 보이는 페이지입니다.</h2> */}
            {/* <Link to="/About"><h2>소개</h2></Link>
            <Link to="/Setting"><h2>설정</h2></Link>
            <Link to="/NewsList"><h2>뉴스</h2></Link> */}
            <Categories category={category} onSelect={onSelect} />
            <NewList category={category} />
        </div>
    )
}
export default Home;