'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  ArrowUp: -7,
  ArrowDown: 7,
  ArrowLeft: -1,
  ArrowRight: 1,

  PageUp: function PageUp(mom) {
    return mom.add(-1, 'month');
  },
  PageDown: function PageDown(mom) {
    return mom.add(1, 'month');
  },
  Home: function Home(mom) {
    return mom.startOf('month');
  },
  End: function End(mom) {
    return mom.endOf('month');
  }
};