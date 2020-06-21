import React from 'react';//react를 사용하겠다는 뜻

export default () => {
    return ( //화면상에서 보여지는 부분
        <footer className="bg-dark text-white mt-5 p-5 text-canter">
            Copyright &copy; {new Date().getFullYear()} samcare
        </footer>
    );
}