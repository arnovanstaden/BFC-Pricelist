'use client';

import { toast } from 'react-toastify';

export const notify = (text: string, style: 'info' | 'error' = 'info'): void => {
  if (style === 'error') {
    toast(text, {
      toastId: text,
      className: 'notification_error',
      bodyClassName: 'notification_body',
    });
    return;
  }

  toast(text, {
    toastId: text,
    className: 'notification',
    bodyClassName: 'notification_body',
  });
};
