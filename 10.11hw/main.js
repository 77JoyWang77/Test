let myGraph3 = document.getElementById('myGraph3');

let trace1_3 = {};
trace1_3.type = "bar";
trace1_3.name = "男";
trace1_3.x = [];
trace1_3.y = [];

for (let i = 0; i < Man.length; i++) {
    trace1_3.x[i] = Man[i]['name'];
    trace1_3.y[i] = Man[i]['count'];
}

let trace2_3 = {};
trace2_3.type = "bar";
trace2_3.name = "女";
trace2_3.x = [];
trace2_3.y = [];

for (let i = 0; i < Woman.length; i++) {
    trace2_3.x[i] = Woman[i]['name'];
    trace2_3.y[i] = Woman[i]['count'];
}

let data3 = [];
data3.push(trace1_3);
data3.push(trace2_3);

let layout_3 = {
    margin: {
        t: 50
    },
    //barmode: 'stack',
    title: '六都111年人口統計'
};
Plotly.newPlot(myGraph3, data3, layout_3);