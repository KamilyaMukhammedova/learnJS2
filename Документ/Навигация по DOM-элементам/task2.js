/* Правда, что elem.lastChild.nextSibling всегда равен null?
Ответ: Да. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
 */

/*
Правда, что elem.children[0].previousSibling всегда равен null ?
Ответ: Нет. Потому что elem.children[0] – потомок-элемент. Но перед ним могут быть другие узлы. Например, previousSibling может быть текстовым узлом.
 */
