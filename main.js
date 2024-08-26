function App() {

    const name = 'Sasita'
    const lname = 'Srisura'
    const birthYear = new Date("Fri May 25 2001 12:49:12 GMT+0700");
    const toDay = new Date();

    function BirthDate(bD, tD) {
        let years = tD.getFullYear() - bD.getFullYear();
        let months = tD.getMonth() - bD.getMonth();
        let days = tD.getDate() - bD.getDate();

        if (months < 0) {
            years--;
            months += 12;
        }

        if (days < 0) {
            months--;
            let previousMonth = new Date(toDay.getFullYear(), toDay.getMonth(), 0).getDate();
            days += previousMonth;
        }
        return <p>Age: {years} years, {months} months, {days} days</p>;
    }

    const st1 = {
        color: '#674188',
        backgroundColor: '#F7EFE5',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    }
    return (
        <div style={st1}>
            <h1 style={{padding: '15px'}}>Name: {name + ' ' + lname} </h1>
            <p>{BirthDate(birthYear, toDay)}</p>
        </div>
    )


}


ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)