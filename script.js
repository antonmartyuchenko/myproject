addButton.onclick = function () {

    /*let li = document.createElement('li');
    li.className = 'li';
    li.textContent = input.value;
    list.append(li);*/

    let tr = document.createElement('tr');
    table.append(tr);

    let td = document.createElement('td');
    td.className = 'td';
    td.textContent = input.value;
    tr.append(td);

} 