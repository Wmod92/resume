function valid(form) {
var fail = false;
var name = form.name.value;
var telephon = form.telephon.value;
if (name == "" || name == " ") {
  fail = "Вы не ввели свое имя";
}
if (telephon == "" {
  fail = "Вы не ввели номер телефона";
}
if (fail) {
  alert (fail);
  return false;
}

}
}
