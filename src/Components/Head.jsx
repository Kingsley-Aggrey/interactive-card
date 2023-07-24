import React from 'react'

const Head = ({ cardHolderName, cardNumber, expDate, cvc }) => {

    return (
        <div className='Head'>
            <div className="card frontCard">
                <img src="./images/card-logo.svg" alt="logo" />
                <h4 className='cardNumber'>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</h4>
                <div className="">
                    <span className='name'>{cardHolderName ? cardHolderName : "Kingsley Aggrey Fynn"}</span>
                    <span>
                        {
                            expDate.month ? expDate.month : "00"
                        }
                        /
                        {
                            expDate.year ? expDate.year :
                                "00"
                        }
                    </span>
                </div>
            </div>

            <div className="card backCard">
                <p>{cvc ? cvc : "000"}</p>
            </div>
        </div>
    )
}

export default Head