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

  var findSolution = function(board, row) {

    if (row === board.attributes.n) {

      return true;
    }

    for (var x = 0; x < board.attributes.n; x++) {
      board.togglePiece(row, x);
      if (!(board.hasAnyRooksConflicts())) {
        return findSolution(board, row + 1);
      }
      board.togglePiece(row, x);

    }
  };

  findSolution(solution, 0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var emptyBoard = new Board({n: n});
  var solutionCount = 0;

  var findSolution = function(board, row) {

    if (row === board.attributes.n) {

      solutionCount++;
      return;
    }

    for (var x = 0; x < board.attributes.n; x++) {
      board.togglePiece(row, x);
      if (!(board.hasAnyRooksConflicts())) {
        findSolution(board, row + 1);
      }
      board.togglePiece(row, x);

    }
  };
  findSolution(emptyBoard, 0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


// var findQSolution = function(board, row) {

//   if (row === board.attributes.n) {
//     return true;
//   }

//   for (var x = 0; x < board.attributes.n; x++) {
//     board.togglePiece(row, x);
//     if (!(board.hasAnyQueenConflicts())) {
//       return findQSolution(board, row + 1);
//     }
//     board.togglePiece(row, x);

//   }
// };

// var findSolution = function(board, piecesPlaced) {
//   console.log(board);
//   var boardVariation = [];
//   var addedAPiece = false;
//   if (piecesPlaced === board.attributes.n) {
//     return board;
//   }
//   //loop through the board and make its variations
//   for (var y = 0; y < board.attributes.n; y++) {
//     for (var x = 0; x < board.attributes.n; x++) {
//       board.togglePiece(y, x);
//       if (board.hasAnyRooksConflicts()) {
//         board.togglePiece(y, x);
//       } else {
//         boardVariation.push(board);
//         addedAPiece = true;
//       }
//     }
//   }
//   if (addedAPiece) {
//     for (var i = 0; i < boardVariation.length; i++) {
//       boardVariation[i] = findSolution(boardVariation[i], piecesPlaced + 1);
//     }
//   }
// };
