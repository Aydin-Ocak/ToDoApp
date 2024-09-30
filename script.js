let taskName = document.getElementById("txtName");
let addBtn = document.querySelector("#btnAdd");
let deleteAllBtn = document.querySelector("#btnDeleteAll");

let listObject = [];
let objectList = document.querySelector("#objectList");



function getList(event) {
    objectList.innerHTML = "";

    for (let i in listObject) {
        let object = `
        <div id="${i}" class="object">
            <label class="lbl">${listObject[i].taskName}</label>
            <div class="buttons">
                <button class="btnObj" id="btnFvr">
                    <i class="fa-regular fa-bookmark"></i>
                </button>
                <button class="btnObj" id="btnDelete">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    `;
        objectList.insertAdjacentHTML("beforeend", object);

        if(listObject[i].fvrt == 1){
            document.getElementById(i).style.backgroundColor = "#fca311";
            }
    }

    document.querySelectorAll("#btnDelete").forEach(b => {
        b.addEventListener("click", deleteObject);
    })
    
    document.querySelectorAll("#btnFvr").forEach(b => {
        b.addEventListener("click", fvrObject);
    })
}

var addObject = () => {
    if (taskName.value != "") {
        let count = listObject.length;

        listObject.unshift({ id: count + 1, taskName: taskName.value, fvrt:0 });
        getList();
    } else {
        alert("Please Add Task Name!")
    }
    console.log(listObject);

}

var deleteAll = () => {
    listObject = [];
    getList();
}

var deleteObject = (e) => {
    let ids = e.currentTarget.parentElement.parentElement;
    delete listObject[ids.id];
    getList();
    console.log(ids)
}
var fvrObject = (e)=>{
    let ids = e.currentTarget.parentElement.parentElement;
    if(listObject[ids.id].fvrt == 0){
        listObject[ids.id].fvrt=1;
    }else if(listObject[ids.id].fvrt ==1){
        listObject[ids.id].fvrt =0;
    }

    getList();
}

document.querySelector("#txtName").addEventListener("keydown", (event)=>{
if (event.key == "Enter"){
    event.preventDefault();
    document.querySelector("#btnAdd").click();
    document.getElementById("txtName").value = "";
}
});


getList();

addBtn.addEventListener("click", addObject)
deleteAllBtn.addEventListener("click", deleteAll);