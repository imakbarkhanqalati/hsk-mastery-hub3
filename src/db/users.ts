import { db } from './index.ts';
import { users } from './schema.ts';

export interface UserSyncPayload {
  displayName?: string | null;
  photoUrl?: string | null;
  dailyGoalTarget?: number;
  currentStreak?: number;
  longestStreak?: number;
  lastPracticeDate?: string | null;
  masteredChars?: string[];
  bookmarkedChars?: string[];
  dailyStudiedByDate?: Record<string, string[]>;
  practiceHistory?: string[];
}

export async function getOrCreateUser(
  uid: string,
  email: string,
  displayName?: string | null,
  photoUrl?: string | null
) {
  try {
    const updateSet: Record<string, unknown> = {
      email,
      updatedAt: new Date(),
    };
    if (displayName) {
      updateSet.displayName = displayName;
    }
    if (photoUrl) {
      updateSet.photoUrl = photoUrl;
    }

    const result = await db
      .insert(users)
      .values({
        uid,
        email,
        displayName: displayName || null,
        photoUrl: photoUrl || null,
      })
      .onConflictDoUpdate({
        target: users.uid,
        set: updateSet,
      })
      .returning();

    return result[0];
  } catch (error) {
    console.error('Database query failed in getOrCreateUser:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}

export async function syncUserProgress(
  uid: string,
  email: string,
  payload: UserSyncPayload
) {
  try {
    const updateSet: Record<string, unknown> = {
      email,
      updatedAt: new Date(),
    };

    if (typeof payload.displayName === 'string' && payload.displayName.trim()) {
      updateSet.displayName = payload.displayName.trim();
    }
    if (typeof payload.photoUrl === 'string') {
      updateSet.photoUrl = payload.photoUrl;
    }
    if (typeof payload.dailyGoalTarget === 'number') {
      updateSet.dailyGoalTarget = payload.dailyGoalTarget;
    }
    if (typeof payload.currentStreak === 'number') {
      updateSet.currentStreak = payload.currentStreak;
    }
    if (typeof payload.longestStreak === 'number') {
      updateSet.longestStreak = payload.longestStreak;
    }
    if (payload.lastPracticeDate !== undefined) {
      updateSet.lastPracticeDate = payload.lastPracticeDate;
    }
    if (Array.isArray(payload.masteredChars)) {
      updateSet.masteredCharsJson = JSON.stringify(payload.masteredChars);
    }
    if (Array.isArray(payload.bookmarkedChars)) {
      updateSet.bookmarkedCharsJson = JSON.stringify(payload.bookmarkedChars);
    }
    if (payload.dailyStudiedByDate && typeof payload.dailyStudiedByDate === 'object') {
      updateSet.dailyStudiedJson = JSON.stringify(payload.dailyStudiedByDate);
    }
    if (Array.isArray(payload.practiceHistory)) {
      updateSet.practiceHistoryJson = JSON.stringify(payload.practiceHistory);
    }

    const result = await db
      .insert(users)
      .values({
        uid,
        email,
        displayName: payload.displayName || null,
        photoUrl: payload.photoUrl || null,
        dailyGoalTarget: payload.dailyGoalTarget ?? 10,
        currentStreak: payload.currentStreak ?? 0,
        longestStreak: payload.longestStreak ?? 0,
        lastPracticeDate: payload.lastPracticeDate ?? null,
        masteredCharsJson: JSON.stringify(payload.masteredChars ?? []),
        bookmarkedCharsJson: JSON.stringify(payload.bookmarkedChars ?? []),
        dailyStudiedJson: JSON.stringify(payload.dailyStudiedByDate ?? {}),
        practiceHistoryJson: JSON.stringify(payload.practiceHistory ?? []),
      })
      .onConflictDoUpdate({
        target: users.uid,
        set: updateSet,
      })
      .returning();

    return result[0];
  } catch (error) {
    console.error('Database query failed in syncUserProgress:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}
