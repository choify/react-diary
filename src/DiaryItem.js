import {useRef, useState} from "react";

const DiaryItem = ({
                       onEdit,
                       onRemove,
                       id,
                       author,
                       content,
                       emotion,
                       created_date
                   }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [localContent, setLocalContent]=useState(content);
    const localContentInput = useRef();

    const toggleIsEdit = () => setIsEdit(!isEdit);
    const handleRemove = () => {
        console.log(id);
        if (window.confirm(`아이디:${id}의 일기를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
        }
    };
    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    };
    const handleEdit = () =>{
        if(localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }
        if(window.confirm(`아이디:${id}의 일기를 정말로 수정하시겠습니까?`)){
            onEdit(id, localContent);
            toggleIsEdit();
        }
    };

    return (
        <div className="DiaryItem">
            <div className="info">
        <span className="author_info">
            작성자 : {author} | 감정점수 : {emotion}
        </span>
                <br/>
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">
                {isEdit ? (
                    <>
                        <textarea
                            ref={localContentInput}
                            value={localContent}
                            onChange={e => setLocalContent(e.target.value)}
                        />
                    </>
                ):(
                    <>
                        {content}
                    </>
                )}
            </div>
            {isEdit ? (
                <>
                    <button onClick={handleQuitEdit}>취소</button>
                    <button onClick={handleEdit}>완료</button>
                </>
            ) : (
                <>
                    <button onClick={toggleIsEdit}>수정</button>
                    <button onClick={handleRemove}>삭제</button>
                </>
                    )}

        </div>
    );
};

export default DiaryItem;
