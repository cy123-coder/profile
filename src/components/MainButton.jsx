const MainButton= ({ClickFunction ,name}) => {
return (
 <>
 <button onClick={ClickFunction}>{name}</button>
 
 </>
);
};

export default MainButton;