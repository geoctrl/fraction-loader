
import '../src/styles.css';
import FractionLoader from '../src/fraction-loader';

let loader = document.querySelector('#loader');
let fractionLoader = new FractionLoader(loader, {
  bar: true,
  barColor: 'green',
  inheritFont: false
});

let timer = 0;


setTimeout(function() {
  let interval = setInterval(function() {

    timer += .001;

    if (timer >= 1) {
      clearInterval(interval);
    }

    fractionLoader.update(timer);
  }, 20);

}, 2000);
