import { GameMode } from '@app/classes/game/game-mode';
import { PlayerScore } from '@app/classes/player/player-score';

export interface GameHistory {
    id: string;
    start: Date;
    duration: { minutes: number; seconds: number };
    players: PlayerScore[];
    gameMode: GameMode;
}
