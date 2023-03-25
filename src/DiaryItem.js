const DiaryItem = ({
    onDelete,
    id,
    author,
    content,
    emotion,
    created_date
}) => {
    return (
        <div className="DiaryItem">
            <div className="info">
        <span className="author_info">
          | 작성자 : {author} | 감정점수 : {emotion} |
        </span>
                <br />
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">{content}</div>
            <button
                onClick={()=>{
                    console.log(id);
                    if(window.confirm(`아이디:${id}의 일기를 정말 삭제하시겠습니까?`)){
                        onDelete(id);
                    }
                }}
            >
                삭제하기
            </button>
        </div>
    );
};

export default DiaryItem;
