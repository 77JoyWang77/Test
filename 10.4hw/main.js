let myGraph2 = document.getElementById('myGraph2');

let trace1_2 = {};
trace1_2.mode = "lines+markers";
trace1_2.type = "scatter";
trace1_2.name = "中壢";
trace1_2.marker = {
    size:8
};
trace1_2.x = [];
trace1_2.y = [];
trace1_2.text = [];
trace1_2.visible = true;

for(let i=0;i<set1_2.length;i++){
    trace1_2.x[i] = set1_2[i][0];
    trace1_2.y[i] = set1_2[i][1];
    trace1_2.text[i] = set1_2[i][2];
}

let trace2_2 = {};
trace2_2.mode = "lines+markers";
trace2_2.type = "scatter";
trace2_2.name = "臺南";
trace2_2.marker = {
    size:8
};
trace2_2.x = [];
trace2_2.y = [];
trace2_2.text = [];
trace2_2.visible = false;

for(let i = 0; i < set2_2.length; i++){
    trace2_2.x[i] = set2_2[i][0];
    trace2_2.y[i] = set2_2[i][1];
    trace2_2.text[i] = set2_2[i][2];
}

let trace3_2 = {};
trace3_2.mode = "lines+markers";
trace3_2.type = "scatter";
trace3_2.name = "花蓮";
trace3_2.marker = {
    size:8
};
trace3_2.x = [];
trace3_2.y = [];
trace3_2.text = [];
trace3_2.visible = false;

for(let i = 0; i < set3_2.length; i++){
    trace3_2.x[i] = set3_2[i][0];
    trace3_2.y[i] = set3_2[i][1];
    trace3_2.text[i] = set3_2[i][2];
}

let data2 = [];
data2.push(trace1_2);
data2.push(trace2_2);
data2.push(trace3_2);

let layout_2 = {
    margin:{
        t:50
    },
    xaxis:{
        range:[0.5, 30.5]
    },
    yaxis:{
        range:[]
    },
    title:'9月每日平均空氣品質指標(AQI)',
    updatemenus:[
        {
            y:1.2,
            x:0.1,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true, false, false]],
                    label:'中壢'
                },
                {
                    method:'restyle',
                    args:['visible',[false, true, false]],
                    label:'台南'
                },
                {
                    method:'restyle',
                    args:['visible',[false, false, true]],
                    label:'花蓮'
                },
                {
                    method:'restyle',
                    args:['visible',[true, true, true]],
                    label:'全部'
                }
            ]
        }
    ]
};
Plotly.newPlot(myGraph2, data2, layout_2);