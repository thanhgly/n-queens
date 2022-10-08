/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  var solution = new Board({n: n}); //fixme

  var findSolution = function(row) {

    if (row === solution.get('n')) {

      return true;
    }

    for (var x = 0; x < solution.get('n'); x++) {
      solution.togglePiece(row, x);
      if (!(solution.hasAnyRooksConflicts())) {
        return findSolution(row + 1);
      }
      solution.togglePiece(row, x);

    }
  };

  findSolution(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n: n});
  var solutionCount = 0;

  var findSolution = function(row) {

    if (row === board.get('n')) {

      solutionCount++;
      return;
    }

    for (var x = 0; x < board.get('n'); x++) {
      board.togglePiece(row, x);
      if (!(board.hasAnyRooksConflicts())) {
        findSolution(row + 1);
      }
      board.togglePiece(row, x);

    }
  };
  findSolution(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other

window.findNQueensSolution = function(n) {

  var solution = new Board({n: n}); //fixme

  var findSolution = function(board, row) {

    if (row === board.attributes.n) {

      return true;
    }

    for (var x = 0; x < board.attributes.n; x++) {
      board.togglePiece(row, x);
      if (!(board.hasAnyQueensConflicts())) {
        if (findSolution(board, row + 1)) {
          return true;
        }
      }
      board.togglePiece(row, x);

    }
    return false;

  };

  findSolution(solution, 0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var emptyBoard = new Board({n: n});
  var solutionCount = 0;


  var findSolution = function(board, row) {
    //console.log('test', board.rows());
    if (row === n) {
      solutionCount++;
      return;
    }


    for (var x = 0; x < n; x++) {
      board.togglePiece(row, x);
      if (!(board.hasAnyQueensConflicts())) {
        findSolution(board, row + 1);
      }

      board.togglePiece(row, x);

    }
  };
  findSolution(emptyBoard, 0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};