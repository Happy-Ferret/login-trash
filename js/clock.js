var doc = document._currentScript.ownerDocument;
this.clock = doc.getElementById('clock');

    // Set the clock going
    updateClock();
    window.setInterval(updateClock, 1000);

  /**
   * Update Clock.
   */
  function updateClock() {
    var date = new Date(),
    hours = date.getHours() + '', // get hours as string
    minutes = date.getMinutes() + ''; // get minutes as string

    // pad with zero if needed
    if (hours.length < 2)
      hours = '0' + hours;
    if (minutes.length < 2)
      minutes = '0' + minutes;

    clock.textContent = hours + ':' + minutes;
  }