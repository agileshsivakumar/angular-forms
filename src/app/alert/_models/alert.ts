export interface Alert {
  message: string;
  type: AlertType;
  fullPage?: boolean;
}

export type AlertType = 'success' | 'error' | 'info' | 'warning';
