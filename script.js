let timer = document.getElementById("countdown");

setTimeout(() => {
  timer.innerHTML = "<b>10</b>";
  setTimeout(() => {
    timer.innerHTML = "<b>9</b>";
    setTimeout(() => {
      timer.innerHTML = "<b>8</b>";
      setTimeout(() => {
        timer.innerHTML = "<b>7</b>";
        setTimeout(() => {
          timer.innerHTML = "<b>6</b>";
          setTimeout(() => {
            timer.innerHTML = "<b>5</b>";
            setTimeout(() => {
              timer.innerHTML = "<b>4</b>";
              setTimeout(() => {
                timer.innerHTML = "<b>3</b>";
                setTimeout(() => {
                  timer.innerHTML = "<b>2</b>";
                  setTimeout(() => {
                    timer.innerHTML = "<b>1</b>";
                    setTimeout(() => {
                      timer.innerHTML = "<b>Happy Independence day</b>";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
