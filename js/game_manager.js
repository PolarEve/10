function GameManager(size, InputManager, Actuator, ScoreManager) {
  this.size         = size; // Size of the grid
  this.inputManager = new InputManager;
  this.scoreManager = new ScoreManager;
  this.actuator     = new Actuator;

  this.startTiles   = 1;

  this.inputManager.on("move", this.move.bind(this));
  this.inputManager.on("restart", this.restart.bind(this));
  this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));

  this.setup();
}

// Restart the game
GameManager.prototype.restart = function () {
  this.actuator.continue();
  this.setup();
};

// Keep playing after winning
GameManager.prototype.keepPlaying = function () {
  this.keepPlaying = true;
  this.actuator.continue();
};

GameManager.prototype.isGameTerminated = function () {
  if (this.over || (this.won && !this.keepPlaying)) {
    return true;
  } else {
    return false;
  }
};

// Set up the game
GameManager.prototype.setup = function () {
  this.grid        = new Grid(this.size);

  this.score       = 0;
  this.over        = false;
  this.won         = false;
  this.keepPlaying = false;

  // Add the initial tiles
  this.addStartTiles();

  // Update the actuator
  this.actuate();
};

// Set up the initial tiles to start the game with
GameManager.prototype.addStartTiles = function () {
  for (var i = 0; i < this.startTiles; i++) {
    this.addRandomTile();
  }
};

// Adds a tile in a random position
GameManager.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable()) {
    var value = Math.random() < 0.9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 ? Math.random() < 0.999999999999999999999999999999999 ? Math.random() < 0.999999999999999999 ? Math.random() < 0.999999999999999 ? Math.random() < 0.9999999999999 ? Math.random() < 0.9999999999996 ? Math.random() < 0.9999999999995 ? Math.random() < 0.999999999999 ? Math.random() < 0.99999999999699999699999699999 ? Math.random() < 0.99999999999 ? Math.random() < 0.9999999999875 ? Math.random() < 0.99999999998 ? Math.random() < 0.9999999999699996999969999699 ? Math.random() < 0.99999999996 ? Math.random() < 0.99999999995 ? Math.random() < 0.99999999992 ? Math.random() < 0.9999999999 ? Math.random() < 0.9999999998958333333333333333333 ? Math.random() < 0.999999999888888888888888888 ? Math.random() < 0.999999999875 ? Math.random() < 0.999999999870365569095151672 ? Math.random() < 0.999999999857142857142857142 ? Math.random() < 0.99999999984375 ? Math.random() < 0.9999999998333333333333333333 ? Math.random() < 0.9999999998 ? Math.random() < 0.999999999791666666666666666666 ? Math.random() < 0.999999999777777777777777777 ? Math.random() < 0.99999999776785714285714285 ? Math.random() < 0.99999999975 ? Math.random() < 0.99999999973958333333333333333333 ? Math.random() < 0.999999999699969996999699969 ? Math.random() < 0.9999999996875 ? Math.random() < 0.999999999666666666666666666 ? Math.random() < 0.999999999609375 ? Math.random() < 0.9999999996 ? Math.random() < 0.99999999958333333333333333333 ? Math.random() < 0.9999999995 ? Math.random() < 0.9999999994791666666666666666666 ? Math.random() < 0.999999999444444444444444444 ? Math.random() < 0.9999999994047619047619047619 ? Math.random() < 0.999999999375 ? Math.random() < 0.99999999930555555555555555555 ? Math.random() < 0.99999999921875 ? Math.random() < 0.9999999991666666666666666666 ? Math.random() < 0.99999999910714285714285714285 ? Math.random() < 0.999999999074074074074074074 ? Math.random() < 0.999999999047619047619047619 ? Math.random() < 0.999999999 ? Math.random() < 0.99999999898989898989898989 ? Math.random() < 0.99999999897959183673469387 ? Math.random() < 0.99999999896907216494845360 ? Math.random() < 0.999999998958333333333333333333 ? Math.random() < 0.99999999894736842105263157 ? Math.random() < 0.99999999893617021276595744 ? Math.random() < 0.99999999892473118279569892 ? Math.random() < 0.99999999891304347826086956 ? Math.random() < 0.99999999890108901089010890 ? Math.random() < 0.99999999888888888888888888 ? Math.random() < 0.99999999887640449438202247 ? Math.random() < 0.9999999988636363636363636363 ? Math.random() < 0.99999999885057471264367816 ? Math.random() < 0.99999999883720930232558139 ? Math.random() < 0.99999999882352941176470588 ? Math.random() < 0.999999998809523809523809523 ? Math.random() < 0.99999999879518072289156626 ? Math.random() < 0.99999999878048780487804878 ? Math.random() < 0.99999999876543209876543209 ? Math.random() < 0.99999999875 ? Math.random() < 0.99999999873417721518987341 ? Math.random() < 0.99999999871794871794871794 ? Math.random() < 0.99999999871299871299871299 ? Math.random() < 0.99999999870129870129870129 ? Math.random() < 0.99999999868421052631578947 ? Math.random() < 0.999999998666666666666666666 ? Math.random() < 0.99999999864864864864864864 ? Math.random() < 0.99999999863013698630136986 ? Math.random() < 0.9999999986111111111111111111 ? Math.random() < 0.99999999859154929577464788 ? Math.random() < 0.99999999857142857142857142 ? Math.random() < 0.99999999855072463768115942 ? Math.random() < 0.99999999852941176470588235 ? Math.random() < 0.99999999850746268656716417 ? Math.random() < 0.99999999848484848484848484 ? Math.random() < 0.99999999846153846153846153 ? Math.random() < 0.9999999984375 ? Math.random() < 0.99999999841269841269841269 ? Math.random() < 0.99999999838709677419354838 ? Math.random() < 0.99999999836065573770491803 ? Math.random() < 0.999999998333333333333333333 ? Math.random() < 0.99999999830508474576271186 ? Math.random() < 0.99999999827586206896551724 ? Math.random() < 0.99999999824561403508771929 ? Math.random() < 0.9999999982142857142857142857 ? Math.random() < 0.99999999818181818181818181 ? Math.random() < 0.99999999814814814814814814 ? Math.random() < 0.99999999811320754716981132 ? Math.random() < 0.99999999807692307692307692 ? Math.random() < 0.99999999803921568627450980 ? Math.random() < 0.999999998 ? Math.random() < 0.99999999795918367346938775 ? Math.random() < 0.99999999791666666666666666666 ? Math.random() < 0.99999999787234042553191489 ? Math.random() < 0.99999999782608695652173913 ? Math.random() < 0.99999999777777777777777777 ? Math.random() < 0.99999999774774774774774774 ? Math.random() < 0.999999997727272727272727272 ? Math.random() < 0.99999999767441860465116279 ? Math.random() < 0.99999999761904761904761904 ? Math.random() < 0.99999999756097560975609756 ? Math.random() < 0.9999999975 ? Math.random() < 0.99999999743589743589743589 ? Math.random() < 0.99999999736842105263157894 ? Math.random() < 0.99999999729729729729729729 ? Math.random() < 0.999999997222222222222222222 ? Math.random() < 0.99999999714285714285714285 ? Math.random() < 0.99999999705882352941176470 ? Math.random() < 0.99999999699699699699699699 ? Math.random() < 0.99999999696969696969696969 ? Math.random() < 0.999999996875 ? Math.random() < 0.99999999677419354838709677 ? Math.random() < 0.99999999666666666666666666 ? Math.random() < 0.99999999655172413793103448 ? Math.random() < 0.999999996428571428571428571 ? Math.random() < 0.99999999629629629629629629 ? Math.random() < 0.99999999615384615384615384 ? Math.random() < 0.999999996 ? Math.random() < 0.9999999958333333333333333333 ? Math.random() < 0.99999999565217391304347826 ? Math.random() < 0.99999999555555555555555555 ? Math.random() < 0.99999999545454545454545454 ? Math.random() < 0.99999999523809523809523809 ? Math.random() < 0.999999995 ? Math.random() < 0.99999999473684210526315789 ? Math.random() < 0.99999999444444444444444444 ? Math.random() < 0.99999999411764705882352941 ? Math.random() < 0.99999999375 ? Math.random() < 0.99999999333333333333333333 ? Math.random() < 0.99999999285714285714285714 ? Math.random() < 0.99999999259259259259259259 ? Math.random() < 0.99999999230769230769230769 ? Math.random() < 0.999999992 ? Math.random() < 0.999999991666666666666666666 ? Math.random() < 0.99999999090909090909090909 ? Math.random() < 0.99999999 ? Math.random() < 0.99999998958333333333333333333 ? Math.random() < 0.9999999888888888888888888 ? Math.random() < 0.99999998809523809523809523 ? Math.random() < 0.9999999875 ? Math.random() < 0.99999998666666666666666666 ? Math.random() < 0.999999986111111111111111111 ? Math.random() < 0.9999999857142857142857142 ? Math.random() < 0.9999999848484848484848484 ? Math.random() < 0.999999984375 ? Math.random() < 0.99999998333333333333333333 ? Math.random() < 0.9999999814814814814814814 ? Math.random() < 0.99999998 ? Math.random() < 0.9999999791666666666666666666 ? Math.random() < 0.9999999777777777777777777 ? Math.random() < 0.99999997727272727272727272 ? Math.random() < 0.999999975 ? Math.random() < 0.99999997222222222222222222 ? Math.random() < 0.9999999714285714285714285 ? Math.random() < 0.99999996875 ? Math.random() < 0.9999999666666666666666666 ? Math.random() < 0.9999999629629629629629629 ? Math.random() < 0.99999996 ? Math.random() < 0.999999958333333333333333333 ? Math.random() < 0.9999999565217391304347826 ? Math.random() < 0.9999999545454545454545454 ? Math.random() < 0.9999999523809523809523809 ? Math.random() < 0.99999995 ? Math.random() < 0.9999999473864210526315789 ? Math.random() < 0.9999999444444444444444444 ? Math.random() < 0.9999999411764705882352941 ? Math.random() < 0.9999999375 ? Math.random() < 0.9999999333333333333333333 ? Math.random() < 0.9999999285714285714285714 ? Math.random() < 0.9999999230769230769230769 ? Math.random() < 0.99999991666666666666666666 ? Math.random() < 0.9999999090909090909090909 ? Math.random() < 0.9999999 ? Math.random() < 0.999999888888888888888888 ? Math.random() < 0.999999875 ? Math.random() < 0.999999857142857142857142 ? Math.random() < 0.9999998333333333333333333 ? Math.random() < 0.9999998 ? Math.random() < 0.99999975 ? Math.random() < 0.999999666666666666666666 ? Math.random() < 0.9999995 ? Math.random() < 0.999999 ? Math.random() < 0.999998 ? Math.random() < 0.999995 ? Math.random() < 0.9999875 ? Math.random() < 0.999975 ? Math.random() < 0.99995 ? Math.random() < 0.9995 ? Math.random() < 0.9984 ? 1 : Math.random() < 0.999999 ? 2 : Math.random () < 0.999999 ? 102 : 222 : Math.random() < 0.99999333333333333333333 ? Math.random() < 0.8 ? 3 : 4 : 3434343434 : Math.random() < 0.9998 ? Math.random() < 0.9 ? Math.random() < 0.8 ? 5 : 6 : Math.random() < 0.75 ? 7 : 8 : 5.5 : 146 : 147 : Math.random() < 0.9998 ? Math.random() < 0.9 ? Math.random() < 0.8 ? 605 : 606 : Math.random() < 0.75 ? 607 : 608 : 609 : Math.random() < 0.5 ? Math.random() < 0.5 ? 97 : 98 : Math.random() < 0.5 ? 99 : 100 : Math.random() < 0.98 ? Math.random() < 0.9 ? Math.random() < 0.8 ? 9 : 10 : Math.random() < 0.75 ? 11 : 12 : Math.random() < 0.8333333333333333333 ? Math.random() < 0.666666666666666666 ? 13 : 14 : Math.random() < 0.666666666666666666 ? 15 : 16 : 49 : 300 : 449 : Math.random() < 0.96 ? Math.random() < 0.75 ? 555 : 5555 : 55555 : 499 : 223 : 949 : Math.random() < 0.666666666666666666 ? Math.random() < 0.5 ? 181 : 182 : Math.random() < 0.9 ? 183 : Math.random() < 0.9 ? 184 : 185 : Math.random() < 0.98 ? Math.random() < 0.9 ? Math.random() < 0.8 ? 109 : 110 : Math.random() < 0.75 ? 111 : 112 : Math.random() < 0.8333333333333333333 ? Math.random() < 0.666666666666666666 ? 113 : 114 : Math.random() < 0.666666666666666666 ? 115 : 116 : 700 : 999 : 272 : 800 : 17 : 4449 : 107 : Math.random() < 0.5 ? Math.random() < 0.5 ? 881 : 882 : Math.random() < 0.5 ? 883 : 884 : 303 : 33 : 416 : 173 : 220 : 4499 : 82 : Math.random() < 0.666666666666666666 ? Math.random() < 0.5 ? 191 : 192 : Math.random() < 0.9 ? 193 : Math.random() < 0.9 ? 194 : 195 : 18 : 4949 : 494 : 36 : 48 : 37 : 34 : 4999 : 50 : 54 : 19 : 9449 : Math.random() < 0.5 ? 133 : 339 : 61 : 9499 : 8282 : 70 : 9949 : Math.random() < 0.5 ? 106 : 145 : 9999 : 21 : 170 : 79 : Math.random() < 0.5 ? 129 : 130 : 206 : 103 : 151 : 22 : 75 : 127 : Math.random() < 0.5 ? 142 : 150 : 169 : 56 : 221 : Math.random() < 0.8 ? Math.random() < 0.5 ? 155 : 157 : 156 : 65 : 171 : 80 : Math.random() < 0.5 ? 71 : 72 : 188 : 81 : 152 : 522 : Math.random() < 0.5 ? 20 : 25 : 154 : 40 : 919 : 333 : Math.random() < 0.5 ? 233 : 234 : Math.random() < 0.5 ? 131 : 137 : 23 : 373 : 104 : 186 : 51 : Math.random() < 0.5 ? Math.random() < 0.5 ? 401 : 402 : Math.random() < 0.5 ? 403 : 404 : 42 : 124 : 62 : 444 : 445 : 190 : 149 : 63 : 47 : 73 : 282 : 153 : 779 : 83 : 55 : 38 : 888 : 198 : 219 : 24 : 164 : 822 : 663 : 88 : 175 : 69 : 483 : 118 : 666 : 26 : 45 : 74 : 159 : 144 : Math.random() < 0.5 ? 76 : 77 : 716 : 44 : 777 : 268 : 189 : 52 : 27 : 277 : 727 : 84 : 128 : 144 : 973 : 87 : 889 : Math.random() < 0.5 ? 66 : 140 : 179 : 464 : 166 : 105 : 89 : 90 : Math.random() < 0.5 ? 197 : 198 : Math.random() < 0.5 ? 424 : 576 : 139 : 91 : 86 : 28 : 46 : 29 : 39 : 64 : 78 : 168 : 35 : 59 : 92 : 67 : 30 : 43 : 93 : 57 : 3333 : 58 : 94 : 400 : 132 : 31 : 95 : 96 : 60 : 68 : 7714 : 53 : 85 : 32 : -1 : 1250 : 41 : 2500 : 33333 : 5000 : 108 : 10000 : 333333 : 101 : 411 : Math.random() < 0.5 ? 120 : 125 : -2 : -3 : -4 : -5 : Math.random() < 0.5 ? 161 : 162; 
    var tile = new Tile(this.grid.randomAvailableCell(), value);
    
    this.grid.insertTile(tile);
  }
};

// Sends the updated grid to the actuator
GameManager.prototype.actuate = function () {
  if (this.scoreManager.get() < this.score) {
    this.scoreManager.set(this.score);
  }

  this.actuator.actuate(this.grid, {
    score:      this.score,
    over:       this.over,
    won:        this.won,
    bestScore:  this.scoreManager.get(),
    terminated: this.isGameTerminated()
  });

};

// Save all tile positions and remove merger info
GameManager.prototype.prepareTiles = function () {
  this.grid.eachCell(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
};

// Move a tile and its representation
GameManager.prototype.moveTile = function (tile, cell) {
  this.grid.cells[tile.x][tile.y] = null;
  this.grid.cells[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};

// Move tiles on the grid in the specified direction
GameManager.prototype.move = function (direction) {
  // 0: up, 1: right, 2:down, 3: left
  var self = this;

  if (this.isGameTerminated()) return; // Don't do anything if the game's over

  var cell, tile;

  var vector     = this.getVector(direction);
  var traversals = this.buildTraversals(vector);
  var moved      = false;

  // Save the current tile positions and remove merger information
  this.prepareTiles();

  // Traverse the grid in the right direction and move tiles
  traversals.x.forEach(function (x) {
    traversals.y.forEach(function (y) {
      cell = { x: x, y: y };
      tile = self.grid.cellContent(cell);

      if (tile) {
        var positions = self.findFarthestPosition(cell, vector);
        var next      = self.grid.cellContent(positions.next);

        // Only one merger per row traversal?
        if (next && next.value === tile.value && !next.mergedFrom) { 
          var merged = new Tile(positions.next, tile.value + 0);
          merged.mergedFrom = [tile, next];

          self.grid.insertTile(merged);
          self.grid.removeTile(tile);

          // Converge the two tiles' positions
          tile.updatePosition(positions.next);

          // Update the score
          self.score += 1;

          // The mighty 10 tile
          if (merged.value === 10) self.won = true;
          if (merged.value === 110) self.over = true;
        } else {
          self.moveTile(tile, positions.farthest);
        }

        if (!self.positionsEqual(cell, tile)) {
          moved = true; // The tile moved from its original cell!
        }
      }
    });
  });

  if (moved) {
    this.addRandomTile();

    if (!this.movesAvailable()) {
      this.over = true; // Game over!
    }

    this.actuate();
  }
};

// Get the vector representing the chosen direction
GameManager.prototype.getVector = function (direction) {
  // Vectors representing tile movement
  var map = {
    0: { x: 0,  y: -1 }, // up
    1: { x: 1,  y: 0 },  // right
    2: { x: 0,  y: 1 },  // down
    3: { x: -1, y: 0 }   // left
  };

  return map[direction];
};

// Build a list of positions to traverse in the right order
GameManager.prototype.buildTraversals = function (vector) {
  var traversals = { x: [], y: [] };

  for (var pos = 0; pos < this.size; pos++) {
    traversals.x.push(pos);
    traversals.y.push(pos);
  }

  // Always traverse from the farthest cell in the chosen direction
  if (vector.x === 1) traversals.x = traversals.x.reverse();
  if (vector.y === 1) traversals.y = traversals.y.reverse();

  return traversals;
};

GameManager.prototype.findFarthestPosition = function (cell, vector) {
  var previous;

  // Progress towards the vector direction until an obstacle is found
  do {
    previous = cell;
    cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
  } while (this.grid.withinBounds(cell) &&
           this.grid.cellAvailable(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required
  };
};

GameManager.prototype.movesAvailable = function () {
  return this.grid.cellsAvailable() || this.tileMatchesAvailable();
};

// Check for available matches between tiles (more expensive check)
GameManager.prototype.tileMatchesAvailable = function () {
  var self = this;

  var tile;

  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      tile = this.grid.cellContent({ x: x, y: y });

      if (tile) {
        for (var direction = 0; direction < 4; direction++) {
          var vector = self.getVector(direction);
          var cell   = { x: x + vector.x, y: y + vector.y };

          var other  = self.grid.cellContent(cell);

          if (other && other.value === tile.value) {
            return true; // These two tiles can be merged
          }
        }
      }
    }
  }

  return false;
};

GameManager.prototype.positionsEqual = function (first, second) {
  return first.x === second.x && first.y === second.y;
};
