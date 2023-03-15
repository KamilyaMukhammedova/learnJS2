const list = document.createElement('ul');
document.body.append(list);

while (true) {
  let userResponse = prompt("Введите текст", "");

  if (!userResponse) {
    break;
  }

  let listItem = document.createElement('li');
  listItem.textContent = userResponse;
  userResponse.append(listItem);
}