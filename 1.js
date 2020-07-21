function drag(class1) {
    this.div = document.querySelector(class1);
    this.x = true;
    this.y = true;
    this.side = {
        x1: "",
        x2: "",
        y1: "",
        y2: "",

    }
}
drag.prototype = {
    move(backcall) {
        var that = this;
        this.div.onmousedown = function(ev) {
            var cx = ev.clientX
            var cy = ev.clientY
            var ox = that.div.offsetLeft;
            var oy = that.div.offsetTop;
            var downx = cx - ox
            var downy = cy - oy
            document.onmousemove = function(ev) {
                var movex = ev.clientX;
                var movey = ev.clientY;
                var x = movex - downx
                var y = movey - downy

                if (that.side.x1 !== "") {
                    if (x < that.side.x1) {
                        x = that.side.x1;
                    }
                }
                if (that.side.x2 !== "") {
                    if (x > that.side.x2) {
                        x = that.side.x2;
                    }
                }
                if (that.side.y1 !== "") {
                    if (y < that.side.y1) {
                        y = that.side.y1;
                    }
                }
                if (that.side.y2 !== "") {
                    if (y > that.side.y2) {
                        y = that.side.y2;
                    }
                }
                if (that.x) {
                    that.div.style.left = x + "px";
                }
                if (that.y) {
                    that.div.style.top = y + "px";
                }
                ev.preventDefault(); //终止默认行为

                document.onmouseup = function(ev) {
                    document.onmousemove = null;
                    document.onmouseup = null;
                    if (backcall) {
                        backcall.call(that.div)
                    }
                }
            }

        }

    }
}