const treasure = {
    x: 100,
    y: 200,
  };
  
  const map = document.getElementById("map");
  
  map.onmousemove = function (event) {
    const coords = document.getElementById("coords");
    let distanceX = Math.abs(event.offsetX - treasure.x);
    let distanceY = Math.abs(event.offsetY - treasure.y);
    let dis = Math.pow(distanceX, 2) + Math.pow(distanceY, 2)
    let c = Math.sqrt(dis);
    let x = event.offsetX
    //... // тут отримуємо значення координат миші x та y від події event
    coords.value = `Координати: ${x}`;
    if (c < 30) {
      // умова, де знаходиться скарб - відстань від координат курсору до координат скарбу менше 30
      alert("Скарб тут!");
    }
  };