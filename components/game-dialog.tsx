import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";
import TTTBoard from "./tttboard";
import { Button } from "./ui/button";
import Link from "next/link";
const InviteDialog = ({ className }: { className?: string }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-neutral-20 w-fit bg-neutral-800 px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-600">
            待在這裡
          </button>
        </DialogTrigger>
        <DialogContent className="w-[400px]">
          <DialogHeader>
            <DialogTitle>您已被邀請至井字棋對戰</DialogTitle>
            <DialogDescription>
              如果你很想待在這又沒事做，不如來玩一場吧
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex gap-2">
              <Link href="/">
                <Button variant="secondary">離開並回首頁</Button>
              </Link>
              <GameDialog />
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InviteDialog;

const GameDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>加入遊戲</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>您是 O 方，並且每場固定由您先手</DialogTitle>
            <DialogDescription>
              您的對方手方為 X 方，他是來打工的 minimax 演算法。
            </DialogDescription>
          </DialogHeader>
          <TTTBoard />
        </DialogContent>
      </Dialog>
    </>
  );
};
