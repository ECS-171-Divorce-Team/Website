export default function InputItem ({ type, question, options, state, setStateFunc }) {
    return (
        <div className='mainContainer'>
            <h5>{question}</h5>
            {
                type == 'numeric' ? (
                    <div className="form">
                        <form>
                            Input: <input type='text' onChange={
                                (event) => setStateFunc(previous => {
                                    console.log(event.target.value)
                                    return {
                                        ...previous,
                                        [question]: event.target.value
                                    }
                                })} />
                        </form>
                    </div>
                ) : (
                    <div className="container">
                        {
                            console.log("Nothing yet")
                        }
                    </div>
                )
            }

        </div>
    )
}