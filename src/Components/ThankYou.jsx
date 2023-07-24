import React from 'react'

const ThankYou = ({ setCardHolderName, setCardNumber, setExpDate, setCvc, setValidCard }) => {

    const ResetAll = () => {
        setCardHolderName("")
        setCardNumber("")
        setExpDate("")
        setCvc("")
        setValidCard(false)
    }

    return (
        <div className='container'>
            <div className="thank-you">
                <img src="./images/icon-complete.svg" alt="complete-icon" />
                <h1>Thank You</h1>
                <p>We've added your card details.</p>
                <button onClick={ResetAll}>Continue</button>
            </div>
        </div>
    )
}

export default ThankYou