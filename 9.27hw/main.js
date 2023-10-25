let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.mode = "lines+markers";
trace1.type = "scatter";
trace1.name = "中壢";
trace1.marker = {
    size:8
};
trace1.x = [];
trace1.y = [];
trace1.text = [];

for(let i=0;i<set1.length;i++){
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}

let trace2 = {};
trace2.mode = "lines+markers";
trace2.type = "scatter";
trace2.name = "臺南";
trace2.marker = {
    size:8
};
trace2.x = [];
trace2.y = [];
trace2.text = [];

for(let i = 0; i < set2.length; i++){
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}

let trace3 = {};
trace3.mode = "lines+markers";
trace3.type = "scatter";
trace3.name = "花蓮";
trace3.marker = {
    size:8
};
trace3.x = [];
trace3.y = [];
trace3.text = [];

for(let i = 0; i < set3.length; i++){
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout = {
    margin:{
        t:50
    },
    xaxis:{
        range:[0.5, 30.5]
    },
    yaxis:{
        range:[]
    },
    title:'9月每日平均空氣品質指標(AQI)'
};
Plotly.newPlot(myGraph, data, layout);