const rangeInput = document.getElementById('customRange4');
  const rangeOutput = document.getElementById('rangeValue');


  rangeOutput.textContent = rangeInput.value;

  rangeInput.addEventListener('input', function() {
    rangeOutput.textContent = this.value;
  });
