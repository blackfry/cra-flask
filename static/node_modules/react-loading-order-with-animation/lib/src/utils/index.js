// getMarginTop

/*
 * Get margin top position for animation
 *
 * @param {String} animation type
 * @param {Number} animation distance
 * @return {Number}
 */
export function getMarginTop(move, distance) {
  let result = 0;

  if (move === 'from-bottom-to-top') {
    result = distance;
  } else if (move === 'from-top-to-bottom') {
    result = distance * -1;
  } else {
    result = 0;
  }

  return result;
}

/*
 * Get margin left position for animation
 *
 * @param {String} animation type
 * @param {Number} animation distance
 * @return {Number}
 */
export function getMarginLeft(move, distance) {
  let result = 0;

  if (move === 'from-right-to-left') {
    result = distance;
  } else if (move === 'from-left-to-right') {
    result = distance * -1;
  } else {
    result = 0;
  }

  return result;
}
