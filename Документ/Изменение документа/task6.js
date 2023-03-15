let listItems = document.getElementsByTagName('li');

for (let item of listItems) {
  const descendantsCount = item.getElementsByTagName('li').length;
  if (!descendantsCount) continue;

  item.firstChild.data += ' [' + descendantsCount + ']';
}