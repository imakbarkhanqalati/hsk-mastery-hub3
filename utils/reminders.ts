import { getLocalDateString } from './streak';

export interface StudyReminderSettings {
  enabled: boolean;
  reminderTime: string; // "HH:mm" in 24h format, e.g. "19:00"
  lastNotifiedDate: string | null; // "YYYY-MM-DD"
  snoozedUntil: number | null; // epoch ms
}

const REMINDER_STORAGE_KEY = 'hsk_hub_study_reminder_v1';

export const DEFAULT_REMINDER_SETTINGS: StudyReminderSettings = {
  enabled: false,
  reminderTime: '19:00',
  lastNotifiedDate: null,
  snoozedUntil: null,
};

export const getReminderSettings = (): StudyReminderSettings => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return DEFAULT_REMINDER_SETTINGS;
  }

  try {
    const raw = localStorage.getItem(REMINDER_STORAGE_KEY);
    if (!raw) return DEFAULT_REMINDER_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<StudyReminderSettings>;

    const enabled = Boolean(parsed.enabled);
    const reminderTime =
      typeof parsed.reminderTime === 'string' && /^\d{2}:\d{2}$/.test(parsed.reminderTime)
        ? parsed.reminderTime
        : DEFAULT_REMINDER_SETTINGS.reminderTime;
    const lastNotifiedDate =
      typeof parsed.lastNotifiedDate === 'string' ? parsed.lastNotifiedDate : null;
    const snoozedUntil =
      typeof parsed.snoozedUntil === 'number' ? parsed.snoozedUntil : null;

    return {
      enabled,
      reminderTime,
      lastNotifiedDate,
      snoozedUntil,
    };
  } catch (err) {
    console.error('Failed to read reminder settings from localStorage:', err);
    return DEFAULT_REMINDER_SETTINGS;
  }
};

export const saveReminderSettings = (
  next: Partial<StudyReminderSettings>
): StudyReminderSettings => {
  const current = getReminderSettings();
  const updated: StudyReminderSettings = {
    ...current,
    ...next,
  };

  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem(REMINDER_STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(
        new CustomEvent('study-reminder-updated', { detail: updated })
      );
    } catch (err) {
      console.error('Failed to save reminder settings to localStorage:', err);
    }
  }

  return updated;
};

export const formatTime12Hour = (time24: string): string => {
  const [hourStr, minuteStr] = (time24 || '19:00').split(':');
  const hour = parseInt(hourStr, 10);
  const minute = minuteStr || '00';
  if (Number.isNaN(hour)) return time24;
  const period = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:${minute} ${period}`;
};

export const hasReachedReminderTime = (
  reminderTime: string,
  now: Date = new Date()
): boolean => {
  const [targetHourStr, targetMinStr] = (reminderTime || '19:00').split(':');
  const targetHour = parseInt(targetHourStr, 10);
  const targetMin = parseInt(targetMinStr, 10);
  if (Number.isNaN(targetHour) || Number.isNaN(targetMin)) return false;

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const targetMinutes = targetHour * 60 + targetMin;
  return currentMinutes >= targetMinutes;
};

export const getBrowserNotificationPermission = ():
  | NotificationPermission
  | 'unsupported' => {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'unsupported';
  }
  return Notification.permission;
};

export const requestBrowserNotificationPermission = async (): Promise<
  NotificationPermission | 'unsupported'
> => {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'unsupported';
  }
  if (Notification.permission === 'granted') {
    return 'granted';
  }
  try {
    const result = await Notification.requestPermission();
    return result;
  } catch {
    return Notification.permission;
  }
};

export const sendBrowserNotification = (
  title: string,
  body: string,
  onClick?: () => void
): boolean => {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return false;
  }
  if (Notification.permission !== 'granted') {
    return false;
  }
  try {
    const notification = new Notification(title, {
      body,
      tag: `hsk-hub-reminder-${getLocalDateString()}`,
    });
    if (onClick) {
      notification.onclick = () => {
        window.focus();
        onClick();
        notification.close();
      };
    }
    return true;
  } catch {
    return false;
  }
};
