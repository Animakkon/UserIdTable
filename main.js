let counterOfJsonUserDataBaseValues;
var userIdTableBody = document.getElementsByTagName("tbody")[0];

//get data from local json file
fetch('UsersDataBaseResponse.json')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++){
            var row = document.createElement('tr');

            var tdNumber = document.createElement('td');
            var tdUserId = document.createElement('td');
            var tdUserName = document.createElement('td');
            
            tdUserId.className = "col-1";
            tdUserName.className = "col-2"

            tdNumber.appendChild(document.createTextNode(i+1));
            tdUserId.appendChild(document.createTextNode(data[i].userID));
            tdUserName.appendChild(document.createTextNode(data[i].name));

            row.appendChild(tdNumber);
            row.appendChild(tdUserId);
            row.appendChild(tdUserName);

            userIdTableBody.appendChild(row);
        }       
    })
    .catch(reject => {
        console.error(reject);
    });
/*
for(let i = 1; i <= counterOfJsonUserDataBaseValues; i++){
    var row = document.createElement('tr');

    var td1 = document.createElement('td');
    
}*/