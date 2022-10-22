// Podemos usar el siguiente formato de comentario para definir
// el comportamiento de la Función.
/* @description: Recorre el árbol del DOM y recolecta elementos que coincidan en un Array (resulSet).
 * @param {function} matcher: La Función generada por matchFunctionMaker.
 * @param {object} startElement: Nodo del que parte la búsqueda.
 * @returns {array}: Nodos encontrados.
 */

const traverseDomAndCollectElements = function (
  matcher,
  startElement = document.body
) {
  let resultSet = [];
  if (matcher(startElement)) {
    resultSet.push(startElement);
  }
  for (let i = 0; i < startElement.children.length; i++) {
    const resultado = traverseDomAndCollectElements(
      matcher,
      startElement.children[i]
    );
    resultSet = resultSet.concat(resultado);
  }
  return resultSet;
};

/* @description: Detecta y devuelve el tipo de selector
 * @param {string} selector: Representa el selector a evaluar.
 * @returns {string}: Devuelve uno de estos tipos: id, class, tag.class, tag
 */
const selectorTypeMatcher = function (selector) {
  if (selector[0] === ".") return "class";
  if (selector[0] === "#") return "id";
  if (selector.includes(".")) return "tag.class";
  if (selector.includes(" > ")) return "direct-child";
  if (selector.includes(" ")) return "child";
  return "tag";
};

/* @description: Genera una Función comparadora en base a un selector dado.
 * @param {string} selector: Representa el selector a evaluar.
 * @returns {function}: Toma un elemento como un parámetro y devuelve true/false si el elemento coincide, o no, con el selector.
 */
const matchFunctionMaker = function (selector) {
  const selectorType = selectorTypeMatcher(selector);
  let matcher;
  if (selectorType === "id") {
    matcher = function (el) {
      return el.id && el.id === selector.slice(1);
    };
  } else if (selectorType === "class") {
    matcher = function (el) {
      return (
        el.className && el.className.split(" ").includes(selector.slice(1))
      );
    };
  } else if (selectorType === "tag.class") {
    matcher = function (el) {
      let array = selector.split(".");
      return (
        el.tagName &&
        el.className &&
        el.tagName.toLowerCase() === array[0] &&
        el.className.split(" ").includes(array[1])
      );
    };
  } else if (selectorType === "tag") {
    matcher = function (el) {
      return el.tagName && el.tagName.toLowerCase() === selector.toLowerCase();
    };
  } else if (selectorType === "direct-child") {
    let [parent, child] = selector.split(" > ");
    let parentMatch = matchFunctionMaker(parent);
    let childMatch = matchFunctionMaker(child);
    matcher = function (element) {
      return childMatch(element) && parentMatch(element.parentNode);
    };
  } else if (selectorType === "child") {
    let [parent, child] = selector.split(" ");
    let parentMatch = matchFunctionMaker(parent);
    let childMatch = matchFunctionMaker(child);

    matcher = function (element) {
      if (childMatch(element)) {
        let currentParent = element.parentNode;
        while (currentParent) {
          if (parentMatch(currentParent)) return true;
          currentParent = currentParent.parentNode;
        }
        return false;
      }
    };
  }
  return matcher;
};

/* @description: Busca en el DOM tree los nodos que coincidan con el selector dado.
 * @param {string} selector: Representa el selector a evaluar.
 * @returns {array}: Nodos encontrados.
 */
const querySelector = function (selector) {
  const selectorMatchFunc = matchFunctionMaker(selector);
  const elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
