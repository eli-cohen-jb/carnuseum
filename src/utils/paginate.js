import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  //calculate start index:
  const startIndex = (pageNumber - 1) * pageSize;
  //_.slice(items, startIndex)
  //no take the portion you need using take method _().take
  // so in order to convert to underscore:
  return _(items).slice(startIndex).take(pageSize).value(); //convert to regular array
}
