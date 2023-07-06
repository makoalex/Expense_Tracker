const NewExpense =()=>{
    return (<div>
        <form>
            <section>
                <div>
                    <label>Title</label>
                    <input type="text" name="" id="text" />
                </div>
            </section>
            <section>
                <div>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"/>
                </div>
            </section>
            <section>
                <div>
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2025-12-31"/>
                </div>
            </section>
            <div>
                <button type="submit">Push it</button>
            </div>

        </form>
    </div>
    )

}
export default NewExpense