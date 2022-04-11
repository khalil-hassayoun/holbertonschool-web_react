interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;

}

const studentA: Student = {
    firstName: 'Jesus',
    lastName: 'Gonzalez',
    age: 38,
    location: 'Barranquilla',
}

const studentB: Student = {
    firstName: 'Isaac',
    lastName: 'Gonzalez',
    age: 38,
    location: 'Barranquilla',
}

const studentList: Array<Student> = [studentA, studentB];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";

table.append(thead);

studentList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow(0);
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);

    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;

});

table.append(tbody);
body.append(table);