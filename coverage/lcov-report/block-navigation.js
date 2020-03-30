var jumpToCode = (function init () {
  // Classes of code we would like to highlight
  var missingCoverageClasses = ['.cbranch-no', '.cstat-no', '.fstat-no'];

  // We don't want to select elements that are direct descendants of another match
  var notSelector = ':not(' + missingCoverageClasses.join('):not(') + ') > '; // Becomes `:not(a):not(b) > `

  // Selecter that finds elements on the page to which we can jump
  var selector = notSelector + missingCoverageClasses.join(', ' + notSelector); // Becomes `:not(a):not(b) > a, :not(a):not(b) > b`

  // The NodeList of matching elements
  var missingCoverageElements = document.querySelectorAll(selector);

  var currentIndex;

  function toggleClass(index) {
    missingCoverageElements.item(currentIndex).classList.remove('highlighted');
    missingCoverageElements.item(index).classList.add('highlighted');
  }

  function makeCurrent(index) {
    toggleClass(index);
    currentIndex = index;
    missingCoverageElements.item(index)
      .scrollIntoView({"behavior": 'smooth',
"block": 'center',
"inline": 'center'});
  }

  function goToPrevious() {
    var nextIndex = 0;
    if (typeof currentIndex !== 'number' || currentIndex === 0) {
      nextIndex = missingCoverageElements.length - 1;
    } else if (missingCoverageElements.length > 1) {
      nextIndex = currentIndex - 1;
    }

    makeCurrent(nextIndex);
  }

  function goToNext() {
    var nextIndex = 0;

    if (typeof currentIndex === 'number' && currentIndex < missingCoverageElements.length - 1) {
      nextIndex = currentIndex + 1;
    }

    makeCurrent(nextIndex);
  }

  return function jump(event) {
    switch (event.which) {
      case 78: // N
      case 74: // J
        goToNext();
        break;
      case 66: // B
      case 75: // K
      case 80: // P
        goToPrevious();
        break;
    }
  };
}());
window.addEventListener('keydown', jumpToCode);
