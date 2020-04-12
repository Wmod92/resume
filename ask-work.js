function valid (form) {
var fail = false;
var name = form.name.value;
var telephon = form.telephon.value;
var email = form.email.value;
var description = form.description.value;

if (name == "" || name == " ") {
  fail = "Вы не ввели свое имя";
}
if (telephon == "" ) {
  fail = "Вы не ввели номер телефона";
}
if (email == "" ) {
  fail = "Вы не ввели Email";
}
if (email.split('@').length - 1 == 0) {
  fail = "Вы ввели Email неправильно";
}
if (description == "" ) {
  fail = "Вы не ввели описание";
}
if (fail) {
  alert (fail);
  return false;
}
}
