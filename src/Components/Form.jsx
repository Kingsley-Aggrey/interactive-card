import React, { useState } from 'react'
import ErrorMsg from './ErrorMsg';


const Form = ({ cardHolderName, cardNumber, expDate, cvc, setCardHolderName, setCardNumber, setExpDate, setCvc, setValidCard }) => {

    const TODAY = new Date();
    const currentDate = {
        month: TODAY.getMonth(),
        year: TODAY.getFullYear(),
    };
    const [firtsCall, setFirtsCall] = useState(true)
    let currentCardNumber = "";

    const [isNameValid, setIsNameValid] = useState(true)
    const [isCardNumberValid, setIsCardNumberValid] = useState(true)
    const [isMonthValid, setIsMonthValid] = useState(true)
    const [isYearValid, setIsYearValid] = useState(true)
    const [isCvcValid, setIsCvcValid] = useState(true)

    const [nameErrorMsg, setNameErrorMsg] = useState("")
    const [cardNmberErrorMsg, setCardNmberErrorMsg] = useState("")
    const [dateErroMsg, setDateErroMsg] = useState("")


    const setCardNumberTo = (e) => {
        console.log(e);
        if (!Number(e.nativeEvent.data) && e.nativeEvent.data !== null) return
        // const length = firtsCall ? e.target.value.length : e.target.value.length + 1;

        currentCardNumber = e.target.value;
        let newLs = ""

        for (let i = 0; i < currentCardNumber.length; i++) {
            const ele = currentCardNumber[i];

            if (ele !== " ") {
                newLs += ele;
            }
        }

        if (newLs.length < 16 && newLs.length % 4 === 0 && e.nativeEvent.data !== null) {
            if (firtsCall) setFirtsCall(!firtsCall);
            setCardNumber(e.target.value + " ")
            console.log("called")
        }
        else {
            setCardNumber(e.target.value)
        }

        console.log(firtsCall)
    }


    const ValidateForm = () => {
        ResetError()

        if (cardHolderName === "") {
            setNameErrorMsg("This field cannot be empty.")
            setIsNameValid(false);
        }
        if (cardNumber === "") {
            setCardNmberErrorMsg("This fields cannot be empty.")
            setIsCardNumberValid(false);
        }
        if (expDate.month === "") {
            setDateErroMsg("This fields cannot be empty.")
            setIsMonthValid(false);
        }
        if (expDate.year === "") {
            setDateErroMsg("This fields cannot be empty.")
            setIsYearValid(false);
        }
        if (cvc === "") {
            setDateErroMsg("These fields cannot be empty.")
            setIsCvcValid(false);
        }

        const d = `${String(currentDate.year)[2]}${String(currentDate.year)[3]}`
        if (expDate.year !== "" && Number(expDate.year) < Number(d)) {
            setDateErroMsg("Your Card is expired!");
            setIsYearValid(false);
            return
        }

        if (cardNumber !== "" && cardNumber.length < 19) {
            // alert("Invalid Card Number!")
            setCardNmberErrorMsg("Invalid Card Number!");
            setIsCardNumberValid(false);
            return
        }


        if (cardHolderName !== "" && cardNumber !== "" && expDate.month !== "" && expDate.year !== "" && cvc !== "") {
            setValidCard(true)
        }
    }

    const ResetError = () => {
        setIsNameValid(true);
        setIsCardNumberValid(true);
        setIsMonthValid(true);
        setIsYearValid(true);
        setIsCvcValid(true);

        setNameErrorMsg("");
        setCardNmberErrorMsg("");
        setDateErroMsg("");
    }

    return (
        <div className='container'>
            <form>
                <div>
                    <label htmlFor="holderName">CARDHOLDER NAME</label>
                    <input
                        className={isNameValid ? "" : "isError"}
                        maxLength={28}
                        value={cardHolderName ? cardHolderName : ""}
                        onChange={(e) => {
                            if (Number(e.nativeEvent.data) && e.nativeEvent.data !== null) return
                            setCardHolderName(e.target.value)
                        }}
                        id='holderName'
                        name='holderName'
                        type="text"
                        placeholder='e.g. Kingsley Aggrey Fynn'
                    />
                </div>
                <ErrorMsg msg={nameErrorMsg} />

                <div>
                    <label htmlFor="cardNumber">CARD NUMBER</label>
                    <input
                        className={isCardNumberValid ? "" : "isError"}
                        maxLength={19}
                        value={cardNumber ? cardNumber : ""}
                        onChange={(e) => setCardNumberTo(e)}
                        id='cardNumber'
                        name='cardNumber'
                        type="text"
                        placeholder='e.g. 1234 5678 9123 0000'
                    />
                </div>
                <ErrorMsg msg={cardNmberErrorMsg} />

                <div className="expAndCVC">
                    <div className="exp">
                        <label htmlFor="expDate">EXP. DATE (MM/YY)</label>
                        <div>
                            <input
                                className={isMonthValid ? "" : "isError"}
                                value={expDate.month ? expDate.month : ""}
                                onChange={(e) => {
                                    if (!Number(e.nativeEvent.data) && e.nativeEvent.data !== null) return
                                    setExpDate({ ...expDate, month: e.target.value })

                                    if (Number(e.target.value) > 12) {
                                        console.log("called")
                                        setExpDate({ ...expDate, month: "12" })
                                    }
                                }}
                                id='month'
                                name='month'
                                type="text"
                                placeholder='MM'
                                maxLength={2}
                            />

                            <input
                                className={isYearValid ? "" : "isError"}
                                value={expDate.year ? expDate.year : ""}
                                onChange={(e) => {
                                    if (!Number(e.nativeEvent.data) && e.nativeEvent.data !== null) return
                                    setExpDate({ ...expDate, year: e.target.value })
                                }}
                                id='year'
                                name='year'
                                type="text"
                                placeholder='YY'
                                maxLength={2}
                            />

                        </div>
                    </div>


                    <div className="cvc">
                        <label htmlFor="cvc">CVC</label>
                        <input
                            className={isCvcValid ? "" : "isError"}
                            value={cvc ? cvc : ""}
                            onChange={(e) => {
                                if (!Number(e.nativeEvent.data) && e.nativeEvent.data !== null) return
                                setCvc(e.target.value)
                            }}
                            id='cvc'
                            name='cvc'
                            type="text"
                            maxLength={3}
                            placeholder='e.g. 123'
                        />
                    </div>
                </div>
                <ErrorMsg msg={dateErroMsg} />
                <button onClick={(e) => {
                    e.preventDefault();
                    ValidateForm()
                }}>Confirm</button>
            </form>
        </div>
    )
}

export default Form