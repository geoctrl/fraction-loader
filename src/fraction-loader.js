export default class FractionLoader {
  constructor(el, config={}) {
    this.el = el;
    this.config = config;
    this.config.bar = this.config.bar === false ? false : !!this.config.bar;

    if (config.inheritFont) {
      this.el.style.fontFamily = 'inherit';
    }

    this.el.classList.add('__fraction-loader');

    this.numerator = document.createElement('div');
    this.denominator = document.createElement('div');
    let slash = document.createElement('div');

    this.numerator.innerHTML = 0;
    this.denominator.innerHTML = 0;
    slash.innerHTML = '/';

    this.el.append(this.numerator);
    this.el.append(slash);
    this.el.append(this.denominator);

    if (this.config.bar !== false) {
      this.bar = document.createElement('div');

      if (this.config.barColor) {
        this.bar.style.backgroundColor = this.config.barColor;
      }

      this.el.append(this.bar);
    }
  }

  update(percent) {
    let numerator = Math.round((percent * 100) / 1.5625);
    let denominator = 64;
    let reduced = reduce(numerator, denominator);
    this.numerator.innerHTML = reduced[0];
    this.denominator.innerHTML = reduced[1];

    if (this.config.bar !== false) {
      this.bar.style.width = `${percent*100}%`;
    }
  }
}

function reduce(n, d){
  let gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  let lcd = gcd(n,d);
  return [n/lcd, d/lcd];
}