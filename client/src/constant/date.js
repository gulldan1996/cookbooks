let today = new Date();
let days = today.getDate();

let month = today.getMonth() + 1;
let year = today.getFullYear();

if (days < 10) {
  days = "0" + days;
}

if (month < 10) {
  month = "0" + month;
}
export let date = today = month + "-" + days + "-" + year;
