export interface GuildProps {
  state: 'idle' | 'loading' | 'success' | 'error';
  guildChecked: boolean;
  onCheckGuild: (checked: boolean) => void;
}

export interface ResultContainerProps {
  $open: boolean;
}
