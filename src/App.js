import './App.css';
import DiaryEditor from "./DiaryEditor";
import {useState} from "react";

function App() {
    const [state, setState]=useState({
        author: "",
        contnet: "",
    });
    return (
        <div className="App">
            <h2>오 늘 의 일 기</h2>
            <DiaryEditor/>
            <div>
                <input
                    name="author"
                    value={state.author}
                    onChange={(e) => {
                        setAuthor({
                            author: e.target.value,
                            content: state.contnet
                        });
                    }}/>
            </div>
            <div>
        <textarea
            value={state.content}
            onChange={(e) => {
                setContent(e.target.value);
            }}/>
            </div>
        </div>
    );
}

export default App;
