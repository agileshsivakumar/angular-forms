export interface Alert {
  message: string;
  type: AlertType;
}

export type AlertType = 'success' | 'error' | 'info' | 'warning';
