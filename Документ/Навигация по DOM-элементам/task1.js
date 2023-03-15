/*
<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
 */

console.log(document.body.firstElementChild); // <div>
console.log(document.body.lastElementChild); // <ul>
console.log(document.body.lastElementChild.lastElementChild); // <li>Пит</li>