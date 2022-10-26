import {Link} from "react-router-dom";
import { useState } from "react";
import axios, { Axios } from "axios";

const memberObj = {
    id : "",
    pwd : "",
    name : "",
    addr: "",
    mail: "",
    phone: ""
};

// 인풋박스의 값의 변화를 알기위해 사용
const Setting = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [addr, setAddr] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [submit, setSubmit] = useState(false); // 서버로 전송할 수 있는지 조건 체크
    const [resData, setResData] = useState(''); // 서버에서 받는 결과 데이터(응답데이터)

    // 이벤트 체크 함수 만들기
    // 글자가 추가되거나 삭제될 때 onChange 이벤트 발셍
    const onChangeId = (e) => setId(e.target.value); // 현재 이벤트가 발생한 입력창의 값을 useState에 셋팅
    const onChangePwd = (e) => setPwd(e.target.value);
    const onChangeName = (e) => setName(e.target.value);
    const onChangeAddr = (e) => setAddr(e.target.value);
    const onChangeMail = (e) =>setMail(e.target.value);
    const onChangePhone = (e) => {
        setPhone(e.target.value);
        isSubmit(); // 원래는 isSubmit()을 각각에 다 걸어줘야 함(지금은 편의상 마지막에만 걸음)
        // isSubmit() => 마지막 input창 입력하면 실행
    }

    // 서버에게 회원 가입 정보를 전송할지 여부 판단
    const isSubmit = () => {
        if(id && pwd && name && addr && mail && phone) setSubmit(true); // 모든 조건이 활성화되면(true..true..true...true...) setSubmit
    }

    // 전송 버튼이 눌려지면 동작하는 함수(비동기 통신을 해야하므로 async키워드 추가)
    // 동기면 안되는 이유 => 동기화가 되버리면 멈추기때문
    // axios는 비동기 async는 내부처리를 간결하기 위해 사용
    const onSumbit = async() => {
        memberObj.id = id; // useState를 통해서 만들어진 값을 객체에 넣음
        memberObj.pwd = pwd;
        memberObj.name = name;
        memberObj.addr = addr;
        memberObj.mail = mail;
        memberObj.phone = phone;
        try {
            // 서버에 대한 요청을 비동기로 처리함
            const res = await axios.post("http://localhost:3000/posts", memberObj, 'application/json');
            setResData(res.data);

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <h1>회원정보 설정</h1>
            <Link to= "/">Home돌아가기</Link>
            <br></br>
            <input type="text" placeholder="아이디 입력" value={id} onChange={onChangeId} />
            <br />
            <input type="password" placeholder="패스워드 입력" value={pwd} onChange={onChangePwd} />
            < br />
            <input type="text" placeholder="이름 입력" value={name} onChange={onChangeName} />
            <br />
            <input type="text" placeholder="주소 입력" value={addr} onChange={onChangeAddr} />
            <br />
            <input type="email" placeholder="메일 입력" value={mail} onChange={onChangeMail} />
            <br />
            <input type="text" placeholder="전화번호 입력" value={phone} onChange={onChangePhone} />
            <br />
            {submit && <button onClick={onSumbit}>전송</button>}
            {resData && <textarea rows={7} value={JSON.stringify(resData, null, 2)} readOnly={true}/>}

        </div>
    )
}

export default Setting;