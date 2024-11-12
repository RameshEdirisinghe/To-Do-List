let list = document.getElementById("li");
let listC = document.getElementById("liC");
let tasklist = [];
let completelist = [];

function add(){
   
    let task = document.getElementById("task").value;
    let taskd = document.getElementById("taskd").value;

    if(task!="" && taskd !=""){
    tasklist.push({task: task, taskd: taskd});
    refresh();
    }else{
        alert("Please Insert Task!!");
    }
}


function refresh(){
    let rowId =0;
    let listbd = "";
    tasklist.forEach(element => {
        listbd += `
                <tr id="${++rowId}">
                    <td id="${"t"+rowId}">${element.task}</td>
                    <td id="${"d"+rowId}">${element.taskd}</td>
                    <td><input type="checkbox" id="${"c"+(rowId)}" onchange="complete(${rowId})"></td>
                </tr>`;
    });

    list.innerHTML = listbd;
}
let index;
function complete(index){
    console.log(index);
    
    let taskdata = document.getElementById("t" + index).innerText;
    let taskdis = document.getElementById("d" + index).innerText;

    completelist.push({task: taskdata, taskd: taskdis});
    let arindex = index-1; 
    tasklist.splice(arindex , 1)
    refresh();
    refreshC();

    console.log(taskdata);
    
    
}
function refreshC(){
    let listbd = "";
    completelist.forEach(element => {
        listbd += `
                <tr >
                    <td >${element.task}</td>
                    <td >${element.taskd}</td>
                </tr>`;
    });

    listC.innerHTML = listbd;
}

