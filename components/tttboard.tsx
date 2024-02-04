"use client";

import React, { useEffect, useState } from "react";

type SquareValue = "X" | "O" | null;
type Board = SquareValue[];

const TTTBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 9個空位
  const [isXNext, setIsXNext] = useState(false); //輪流切換玩家
  const [winner, setWinner] = useState<SquareValue>(null);
  const [winningSquares, setWinningSquares] = useState<number[]>([]); // 儲存連線的格子

  const minimax = (
    board: Board,
    depth: number,
    isMaximizing: boolean,
  ): number => {
    const win = checkWin(board);
    if (win?.winner === "O") return -10 + depth; //如果 玩家（"O"）赢了，返回 -10 + depth
    if (win?.winner === "X") return 10 + depth; //如果 AI（"X"）赢了，返回 10 - depth
    if (isBoardFull(board)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        // 嘗試每個可能的行動
        if (!board[i]) {
          //如果第 i 格是空的
          board[i] = "X";
          let score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = "O"; // 玩家的移動
          let score = minimax(board, depth + 1, true);
          board[i] = null; // 撤銷移動
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const findBestMove = (board: Board) => {
    let bestScore = -Infinity;
    let bestMove = -1;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = "X"; // AI的移動
        let score = minimax(board, 0, false);
        board[i] = null; // 撤銷移動
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    return bestMove;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null)); // 重置棋盤
    setIsXNext(false);
    setWinner(null); // 重置勝利者
    setWinningSquares([]); // 重置勝利格子
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return; // 如果已經有贏家或該格已被佔用，則不進行任何操作

    const newBoard = [...board]; // 使用新棋盤來更新原始棋盤
    newBoard[index] = "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const win = checkWin(newBoard); // 使用更新後的棋盤來檢查勝利條件
    if (win) {
      setWinner(newBoard[win.winningIndices[0]]);
      setWinningSquares(win.winningIndices);
    } else {
      setIsXNext(false);
      setWinningSquares([]);
    }
  };

  const isBoardFull = (board: Board) =>
    board.every((square) => square !== null); //棋盤是否已滿

  const checkWin = (newBoard: Board) => {
    const winConditions = [
      [0, 1, 2], // 第一行
      [3, 4, 5], // 第二行
      [6, 7, 8], // 第三行
      [0, 3, 6], // 第一列
      [1, 4, 7], // 第二列
      [2, 5, 8], // 第三列
      [0, 4, 8], // 主對角線
      [2, 4, 6], // 副對角線
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        //newBoard[a]、newBoard[b] 和 newBoard[c] 上的值都相同（表示這三個格子都被同一玩家標記）
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return { winner: newBoard[a], winningIndices: [a, b, c] };
      }
    }
    return null;
  };

  // 渲染 井字棋 格子
  const renderSquare = (i: number): JSX.Element => (
    <div
      onClick={() => handleClick(i)}
      className={`${board[i] == null ? "cursor-pointer" : "cursor-default"} ${winningSquares.includes(i) ? "text-[#cbc18b]" : ""} h-20 w-20 border-2 border-slate-950 text-center text-7xl hover:bg-violet-50`}
    >
      {board[i]}
    </div>
  );

  useEffect(() => {
    // 只有在棋盤上至少有一個非空的值時（即玩家已經先下棋），AI才會下棋
    if (!isXNext && !winner && board.some((square) => square !== null)) {
      const aiMove = findBestMove(board);

      if (aiMove !== -1) {
        const newBoard = [...board]; // 使用新棋盤來更新原始棋盤
        newBoard[aiMove] = "X"; // AI 使用 "X" 並更新棋盤
        setTimeout(() => {
          setBoard(newBoard); //延遲 0.2 秒後更新棋盤，讓 user 覺得 ai 需要思考
        }, 200);

        setIsXNext(true); // 切換回玩家

        const win = checkWin(newBoard);
        if (win) {
          setWinner(newBoard[win.winningIndices[0]]); //更新勝利者
          setWinningSquares(win.winningIndices); //更新連線的格子
        }
      }
    }
  }, [board, isXNext, winner]);

  return (
    <>
      <div className="m-auto grid grid-cols-3 border-2 border-slate-950">
        {/* 格子渲染 */}
        {board.map((square, i) => (
          <div key={i}>{renderSquare(i)}</div>
        ))}
      </div>

      {winner && (
        <div className="mt-4 text-center">
          <p>{`${winner == "O" ? "你贏了！" : "你輸了！"} `}</p>
          <button
            onClick={() => {
              resetGame();
            }}
          >
            重新開始
          </button>
        </div>
      )}

      {!winner && isBoardFull(board) && (
        <div className="mt-4 text-center">
          <p>這場沒輸沒贏</p>
          <button
            onClick={() => {
              resetGame();
            }}
          >
            重新開始
          </button>
        </div>
      )}
    </>
  );
};

export default TTTBoard;
