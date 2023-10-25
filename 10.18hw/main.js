
let myGraph4 = document.getElementById('myGraph4');
let myGraph5 = document.getElementById('myGraph5');

let trace1_4 = {};
trace1_4.type = "pie";
trace1_4.title = "出口國家";
trace1_4.labels = [];
trace1_4.values = [];
trace1_4.hole = 0.5
trace1_4.domain = {
    row: 0,
    column: 0
};
trace1_4.marker = {
    colors : [
        'rgb(193, 203, 215)',
        'rgb(134, 150, 167)',
        'rgb(181, 196, 177)',
        'rgb(201, 192, 211)',
        'rgb(238, 229, 248)',
        'rgb(150, 164, 139)'
    ]
};

for (let i = 0; i < export_country.length; i++) {
    trace1_4.labels[i] = export_country[i]['name'];
    trace1_4.values[i] = export_country[i]['count'];
}

let trace2_4 = {};
trace2_4.type = "pie";
trace2_4.title = "進口國家";
trace2_4.labels = [];
trace2_4.values = [];
trace2_4.hole = 0.5
trace2_4.domain = {
    row: 0,
    column: 1
};

for (let i = 0; i < import_country.length; i++) {
    trace2_4.labels[i] = import_country[i]['name'];
    trace2_4.values[i] = import_country[i]['count'];
}

let trace3_4 = {};
trace3_4.type = "pie";
trace3_4.title = "出口貨品";
trace3_4.labels = [];
trace3_4.values = [];
trace3_4.hole = 0.5
trace3_4.domain = {
    row: 0,
    column: 0
};
trace3_4.marker = {
    colors : [
        'rgb(193, 203, 215)',
        'rgb(134, 150, 167)',
        'rgb(181, 196, 177)',
        'rgb(201, 192, 211)',
        'rgb(238, 229, 248)',
        'rgb(150, 164, 139)'
    ]
};

for (let i = 0; i < export_goods.length; i++) {
    trace3_4.labels[i] = export_goods[i]['name'];
    trace3_4.values[i] = export_goods[i]['count'];
}

let trace4_4 = {};
trace4_4.type = "pie";
trace4_4.title = "進口貨品";
trace4_4.labels = [];
trace4_4.values = [];
trace4_4.hole = 0.5
trace4_4.domain = {
    row: 0,
    column: 1
};
trace4_4.marker = {
    colors : [
        'rgb(193, 203, 215)',
        'rgb(150, 164, 139)',
        'rgb(238, 229, 248)',
        'rgb(201, 192, 211)'
    ]
};

for (let i = 0; i < import_goods.length; i++) {
    trace4_4.labels[i] = import_goods[i]['name'];
    trace4_4.values[i] = import_goods[i]['count'];
}


let data4 = [];
data4.push(trace1_4);
data4.push(trace2_4);

let data5 = [];
data5.push(trace3_4);
data5.push(trace4_4);

let layout4 = {
    margin: {
        t: 50,
    },
    grid: {
        rows: 1,
        columns: 2
    },
    title: '111年進出口貿易量—主要進出口國家'
};
let layout5 = {
    margin: {
        t: 50,
    },
    grid: {
        rows: 1,
        columns: 2
    },
    title: '111年進出口貿易量—主要進出口貨品'
};
Plotly.newPlot(myGraph4, data4, layout4);
Plotly.newPlot(myGraph5, data5, layout5);