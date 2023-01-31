import Chart from './../Chart/Chart'
const ExpensesChart = (props)=>{

   
    const chartDataPoints =  [

        {label:'Jan',value:10},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Agu',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0}
    ];

    for(let expense of props.expenses){
        console.log(expense.date.getMonth());
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return(<Chart dataPoints={chartDataPoints}>

    </Chart>)
}

export default ExpensesChart;