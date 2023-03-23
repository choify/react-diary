import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const diaryList = [
    {
        id: 1,
        author: "용성",
        content: "하이 1",
        emotion: 5,
        created_date: new Date().getTime(),
    },
    {
        id: 2,
        author: "영준",
        content: "안녕 2",
        emotion: 2,
        created_date: new Date().getTime(),
    },
    {
        id: 3,
        author: "정일",
        content: "잘자",
        emotion: 3,
        created_date: new Date().getTime(),
    },
    {
        id: 4,
        author: "영빈",
        content: "좋은아침",
        emotion: 4,
        created_date: new Date().getTime(),
    },
];

function App() {
    return (
        <div className="App">
            <DiaryEditor/>
            <DiaryList diaryList={diaryList}/>
        </div>
    );
}

export default App;
