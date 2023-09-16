export default function Button({getAdvice}) {
    return (
         <button id="get-advice-btn" className="btn" onClick={getAdvice}>
            <i className="fa-solid fa-2xl fa-dice-five"></i>
        </button>
    )
}