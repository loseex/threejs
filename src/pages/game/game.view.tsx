import Game from "@/game";
import { Button } from "flowbite-react";
import { FC } from "react";

const GameView: FC = (): JSX.Element => {
  return (
    <div>
      <div className="absolute z-10 w-full p-2">
        <Button className="w-fit" color="purple" href="/">
          <span>Назад</span>
        </Button>
      </div>
      <Game />
    </div>
  );
};

export default GameView;
