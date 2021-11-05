class stat_ball {
  constructor(
    ctx,
    col_nber = 1,
    max_val = 40,
    val = 30,
    row_nber = 0,
    color_fill = "green",
    color_fill_outline = "chocolate",
    pos_x = 90,
    pos_y = 90,
    size = 10,
    color_fill_outline_line_height = 5
  ) {
    this.ctx = ctx;
    this.col_nber = col_nber;
    this.max_val = max_val;
    this.val = val;
    this.row_nber = row_nber;
    this.color_fill = color_fill;
    this.color_fill_outline = color_fill_outline;
    this.color_fill_outline_line_height = color_fill_outline_line_height;
    this.pos_x = pos_x;
    this.size = size;
    this.pos_y = pos_y;
    //---
    this.#draw_The_stat_ball();
    //---
    console.log(this.max_val);
  }

  //--Private function
  #draw_The_stat_ball() {
    this.ctx.beginPath();
    this.ctx.arc(
      this.pos_x,
      this.pos_y,
      (this.val / this.max_val) * this.size,
      0,
      2 * Math.PI,
      false
    );
    this.ctx.fillStyle = this.color_fill;
    this.ctx.fill();
    this.ctx.lineWidth = this.color_fill_outline_line_height;
    this.ctx.strokeStyle = this.color_fill_outline;
    this.ctx.stroke();
    this.ctx.closePath();
  }

  //---Get positionXy
  getstatBallYx() {
    return {
      x: this.pos_x,
      y: this.pos_y,
      radius: 10,
      value: this.val
    };
  }
}
//---Write a legend text
class stat_legend_text {
  constructor(
    ctx,
    text = "Hello, World!!",
    fontSize = 14,
    fontColor = [
      { percentage: "0.2", color: "magenta" },
      { percentage: "0.8", color: "green" }
    ],
    font = "serif",
    width = 100,
    pos_x = 70,
    pos_y = 40
  ) {
    this.ctx = ctx;
    this.text = text;
    this.fontSize = fontSize;
    this.width = width;
    this.font = font;
    this.fontColor = fontColor;
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    //---
    this.#draw_WriteLegendText();
  }

  //--Private function
  #draw_WriteLegendText() {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    //---
    for (var i = 0; i < this.fontColor.length; i++) {
      gradient.addColorStop(
        this.fontColor[i].percentage,
        ` ${this.fontColor[i].color}`
      );
    }

    // Fill with gradient
    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.font = `${this.fontSize}px ${this.font}`;
    this.ctx.fillText(`${this.text}`, this.pos_x, this.pos_y, this.width);
    this.ctx.closePath();
  }
}

//---Draw ball hover
class draw_ball_hover {
  constructor(
    ctx,
    val = 10,
    pos_x = 50,
    pos_y = 50,
    rgba = [100, 0, 140, 0.6]
  ) {
    this.ctx = ctx;
    this.val = Math.floor(Math.random() * val);
    this.val_show = val;
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.rgba = rgba;
    //---
    this.#clear_ball_hover_UI();
    this.#draw_ball_hover_UI();
  }

  //--Private function
  #clear_ball_hover_UI() {
    var allClasses = document.querySelectorAll(
      "[class^=popover__wrapper_aljjaodaj_677_hiashiahs_tyyyy]"
    );
    for (var i = 0; i < allClasses.length; i++) {
      allClasses[i].remove();
    }
  }
  #draw_ball_hover_UI() {
    var elemDiv = document.createElement("div");

    elemDiv.classList.add("popover__wrapper" + this.val);
    elemDiv.classList.add(
      "popover__wrapper_aljjaodaj_677_hiashiahs_tyyyy" + this.val
    );
    elemDiv.innerHTML = `<a style='background:rgba(${this.rgba[0]},${this.rgba[1]},${this.rgba[2]},${this.rgba[3]});' class='popover_anchor' href="#">
    <h2 class="popover__title${this.val}" style='visibility:hidden;' style=''>${this.val}</h2>
    </a>
    <div class="popover__content${this.val}" style='background:rgba(${this.rgba[0]},${this.rgba[1]},${this.rgba[2]},${this.rgba[3]});'>
      <p class="popover__message${this.val}">${this.val_show}</p>      
    </div>
    
    <style>
    .popover_anchor${this.val} {
      text-decoration: none;
  }
    
    .popover__title${this.val} {
      font-size: 20px;
      line-height: 36px;
      text-decoration: none;
      color: rgb(228, 68, 68);
      text-align: center;
      
     
    }
    
    .popover__wrapper${this.val} {
     
      
    }
    .popover__content${this.val} {
      opacity: 0;
      visibility: hidden;
      transform: translate(0, 10px);
      background-color: rgba(${this.rgba[0]},${this.rgba[1]},${this.rgba[2]},${this.rgba[3]});
      
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
      width: auto;
    }
    .popover__content${this.val}:before {
      position: absolute;
      z-index: 100;
      content: "";
      
      top: -8px;
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent rgba(${this.rgba[0]},${this.rgba[1]},${this.rgba[2]},${this.rgba[3]}) transparent;
      transition-duration: 0.5s;
      transition-property: transform;
    }
    .popover__wrapper${this.val}:hover .popover__content${this.val} {
      z-index: 10;
      opacity: 1;
      visibility: visible;
      transform: translate(0, -20px);
      transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
    }
    .popover__message${this.val} {
      text-align: center;
      padding: 3px;
    }
    
    </style>
    
    
    `;

    document.body.appendChild(elemDiv);
    //----
    elemDiv.style.position = `absolute`;
    elemDiv.style.top = `${this.pos_y - 30 / 3}px`;
    elemDiv.style.left = `${this.pos_x - 30 / 2}px`;
    elemDiv.style.height = `30px`;
  }
}
//--Draw X and Y axis--
class stat_xY_axis {
  constructor(ctx, cols, rows, width, height) {
    this.ctx = ctx;
    //---
    this.options = {
      cols: cols,
      rows: rows,
      width: width * 0.8,
      height: height * 0.8
    };
    //--
    this.XyCoordinates = [];
    this.#createCanvasGrid(this.options);
  }

  //--Private function
  #createCanvasGrid(options) {
    let ctx = this.ctx;

    // canvas.width = options.width;
    // canvas.height = options.height;
    // canvas.style.border = "1px solid red"

    ctx.translate(0.15 * options.width, 0.15 * options.height); // https://stackoverflow.com/a/13294650/1762224

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "chocolate";

    let offsetX = Math.floor(options.width / options.cols);
    let offsetY = Math.floor(options.height / options.rows);
    //---
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    for (let x = 0; x < options.width; x += offsetX) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, options.height - options.height * 0.005);
      //---Record coordinates
    }
    //--------
    for (let y = 0; y < options.height; y += offsetY) {
      ctx.moveTo(0, y);
      ctx.lineTo(options.width + options.width * 0.05, y);
      //--REcord coordinates
    }
    //---Grid coordinates--
    for (let x = 0; x < options.width; x += offsetX) {
      //ctx.moveTo(x, 0);
      //ctx.lineTo(x, options.height-options.height*0.005);
      var rows = [];
      //---Record coordinates
      for (let y = 0; y < options.height; y += offsetY) {
        //ctx.moveTo(0, y);
        //ctx.lineTo(options.width+options.width*0.05, y);
        //--REcord coordinates
        rows.push([x, y]);
      }
      //---
      this.XyCoordinates.push(rows);
    }
    //---

    ctx.stroke();
    //---
    ctx.translate(-0.15 * options.width, -0.15 * options.height);

    return canvas;
  }
  //---The params of the grid
  params_of_the_grid() {
    return {
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      canvasParams: this.options,
      XyCoordinates: this.XyCoordinates,
      translateCtx: [0.15 * this.options.width, 0.15 * this.options.height]
    };
  }
}
window.addEventListener("load", () => {
  const all_balls_pos = [];
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  //--
  function getArrayMax(array) {
    return Math.max.apply(null, array);
  }
  function getArrayMin(array) {
    return Math.min.apply(null, array);
  }
  const DataCoords = [
    [200, 20, 30, 50, 60, 96, 200, 300, 50],
    [150, 20, 30, 50, 60, 95, 200, 300, 50],
    [10, 20, 30, 50, 60, 94, 200, 300, 50],
    [10, 20, 30, 50, 60, 93, 200, 300, 50],
    [10, 20, 30, 50, 60, 92, 200, 300, 50],
    [17, 28, 39, 50, 60, 91, 200, 300, 50]
  ];
  //----
  const DataCoords_VerticalLegend = [
    "Action 1",
    "Action 2",
    "Action 3",
    "Action 4",
    "Action 5",
    "Action 6",
    "Action 7",
    "Action 8",
    "Action 9"
  ];
  const DataCoords_HorizontalLegend = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6"
  ];
  //--------
  const x_axis_legend = DataCoords;
  const y_axis_legend = DataCoords[0];
  //-----------
  let max_value = 0;
  let max = [];
  for (var i = 0; i < DataCoords.length; i++) {
    for (var n = 0; n < DataCoords[i].length; n++) {
      console.log(getArrayMax(DataCoords[i]));
      max.push(getArrayMax(DataCoords[i]));
    }
  }
  //-----
  max_value = getArrayMax(max);

  //--Resizing
  canvas.height = window.innerHeight * 0.5;
  canvas.width = window.innerWidth * 0.5;
  //--Draw grid--
  const grid = new stat_xY_axis(
    ctx,
    x_axis_legend.length,
    y_axis_legend.length,
    canvas.width,
    canvas.height
  );
  const gridConfigs = grid.params_of_the_grid();
  //console.log(ball_posXy);
  //---
  //--Write a text--
  //const txt = new stat_legend_text(ctx);
  //--Draw a hover--
  console.log(gridConfigs);
  let textGridCounterY = 0;
  //ctx.translate(gridConfigs.translateCtx[0], gridConfigs.translateCtx[1]);
  for (var i = 0; i < gridConfigs.XyCoordinates.length - 1; i++) {
    for (var n = 0; n < gridConfigs.XyCoordinates[i].length - 1; n++) {
      let ball = new stat_ball(
        ctx,
        1,
        max_value,
        DataCoords[i][n],
        0,
        "black",
        "black",
        gridConfigs.XyCoordinates[i][n][0] +
          gridConfigs.offsetX +
          gridConfigs.translateCtx[0],
        gridConfigs.XyCoordinates[i][n][1] + gridConfigs.translateCtx[1],
        gridConfigs.offsetY / 2,
        [100, 0, 140, 0.6]
      );

      all_balls_pos.push(ball.getstatBallYx());
      //--- Draw col legend
      if (i == 0) {
        new stat_legend_text(
          ctx,
          DataCoords_VerticalLegend[n],
          14,
          [
            { percentage: "0.2", color: "black" },
            { percentage: "0.8", color: "black" }
          ],
          "serif",
          (width = gridConfigs.offsetX / 2),
          gridConfigs.XyCoordinates[0][n][0] +
            gridConfigs.translateCtx[0] -
            gridConfigs.offsetX * 0.8,
          gridConfigs.XyCoordinates[i][0][1] +
            textGridCounterY +
            gridConfigs.translateCtx[1]
        );
        //---
        textGridCounterY += gridConfigs.offsetY;
      }
    }
    //---- Draw row legend
    new stat_legend_text(
      ctx,
      DataCoords_HorizontalLegend[i],
      14,
      [
        { percentage: "0.2", color: "green" },
        { percentage: "0.8", color: "green" }
      ],
      "serif",
      (width = gridConfigs.offsetX / 2),
      gridConfigs.XyCoordinates[i][n][0] +
        gridConfigs.offsetX +
        gridConfigs.translateCtx[0],
      gridConfigs.canvasParams.height +
        gridConfigs.translateCtx[1] +
        gridConfigs.offsetY / 3
    );
    //--
  }
  //--
  //ctx.translate(-gridConfigs.translateCtx[0], -gridConfigs.translateCtx[1]);

  //--Another ball--
  /*const ball2 = new stat_ball(
    ctx,
    1,
    40,
    30,
    0,
    "black",
    "red",
    180,
    140,
    10,
    [100, 0, 140, 0.6]
  );
  all_balls_pos.push(ball2.getstatBallYx());*/
  //---canvas mouse events--
  canvas.addEventListener("mousemove", onPosition);
  //--
  function onPosition(e) {
    //---

    const mousePoint = {
      x: e.clientX - canvas.offsetLeft,
      y: e.clientY - canvas.offsetTop
    };

    const mousePointG = {
      x: e.clientX,
      y: e.clientY
    };
    //--
    for (var i = 0; i < all_balls_pos.length; i++) {
      if (isIntersect(mousePoint, all_balls_pos[i])) {
        try {
          const ball_hover2 = new draw_ball_hover(
            ctx,
            all_balls_pos[i].value,
            mousePointG.x,
            mousePointG.y,
            [255, 0, 140, 0.6]
          );
        } catch (error) {}
      } else {
      }
    }
  }

  //--
  function isIntersect(point, circle) {
    //--
    return (
      Math.sqrt((point.x - circle.x) ** 2 + (point.y - circle.y) ** 2) <
      circle.radius
    );
  }
  //------------
});
