
export enum LaunchState {
  WELCOME = 'WELCOME',
  GIMMICK = 'GIMMICK',
  COUNTDOWN = 'COUNTDOWN',
  CELEBRATION = 'CELEBRATION',
  FINISHED = 'FINISHED'
}

export interface Quote {
  text: string;
  author: string;
}
